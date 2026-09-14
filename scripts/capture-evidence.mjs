import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const records = [];
for (const [name,args] of [['build',['node_modules/typescript/bin/tsc','-p','tsconfig.json']],['tests',['--import','tsx','--test','test/agent.test.ts','test/policy.test.ts']],['local-demo',['--import','tsx','src/index.ts']]]) {
 const run=spawnSync(process.execPath,args,{encoding:'utf8',timeout:60000,env:{...process.env,T3N_LIVE:'false'}});
 records.push({name,exitCode:run.status,output:run.stdout+run.stderr});
 if(run.status!==0) throw new Error(`${name} failed; no evidence published`);
}
const live=spawnSync(process.execPath,['--env-file=.env','--import','tsx','src/index.ts'],{encoding:'utf8',timeout:90000});
let result; try {result=JSON.parse(live.stdout);} catch {}
const checks={exitSuccess:live.status===0,authenticatedDid:typeof result?.audit?.subject==='string' && result.audit.subject.startsWith('did:t3n:'),allowed:result?.audit?.decision==='allow',executed:result?.executed===true,metadataRedacted:result?.audit?.metadata?.apiKey==='[REDACTED]',placeholderAbsent:!live.stdout?.includes('must-not-appear'),stderrEmpty:live.stderr===''};
console.log(JSON.stringify(checks,null,2));
if(!Object.values(checks).every(Boolean)) throw new Error('Live verification failed; raw output suppressed');
records.push({name:'live-sandbox (sanitized checks; raw output omitted)',exitCode:live.status,output:JSON.stringify(checks,null,2)});
const evidence={verifiedAt:new Date().toISOString(),node:process.version,records};
writeFileSync('terminalResults/verification.json',JSON.stringify(evidence,null,2)+'\n');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
writeFileSync('terminalResults/verification.html',`<!doctype html><meta charset="utf-8"><title>TrustGate verification</title><style>body{font:16px system-ui;padding:35px;background:#fff;color:#18222e}pre{font:14px monospace;white-space:pre-wrap;background:#eef2f6;padding:18px}h1{font-size:26px}</style><h1>T3N TrustGate — verification evidence</h1><p>${evidence.verifiedAt} | Node ${evidence.node}</p><p>Captured command output. Live output is represented only by validation booleans; DID omitted. Sandbox unsafe trust anchor. No purchase executed.</p>`+records.map(r=>`<h2>${escape(r.name)} — exit ${r.exitCode}</h2><pre>${escape(r.output)}</pre>`).join(''));
