import test from "node:test"; import assert from "node:assert/strict"; import { authorize } from "../src/agent.js"; import { defaultPolicy } from "../src/config.js"; import { localDemoIdentity } from "../src/t3n.js";
test("fails closed on identity mismatch",()=>assert.equal(authorize(localDemoIdentity("a"),{agentId:"b",action:"read",resource:"catalog"},defaultPolicy).executed,false));
test("redacts secret metadata",()=>{const r=authorize(localDemoIdentity("a"),{agentId:"a",action:"read",resource:"catalog",metadata:{apiKey:"secret",nested:{password:"pw"}}},defaultPolicy); assert.equal(r.audit.metadata?.apiKey,"[REDACTED]"); assert.equal((r.audit.metadata?.nested as any).password,"[REDACTED]");});

test("authenticated subject authorizes purchase and preserves redaction", () => {
 const identity = {subject:"authenticated-test-subject",provider:"t3n" as const,authenticated:true};
 const request = {agentId:identity.subject,action:"purchase",resource:"approved-vendor",amount:120,metadata:{apiKey:"must-not-appear",nested:[{token:"hidden"}]}};
 const result = authorize(identity,request,defaultPolicy);
 assert.equal(result.executed,true);
 assert.equal(result.audit.decision,"allow");
 assert.equal(result.audit.subject,identity.subject);
 assert.equal(result.audit.metadata?.apiKey,"[REDACTED]");
 assert.equal(JSON.stringify(result).includes("hidden"),false);
 const denied = authorize(identity,{...request,agentId:"impostor"},defaultPolicy);
 assert.equal(denied.executed,false);
 assert.equal(denied.audit.decision,"deny");
 assert.equal(denied.audit.reason,"trusted identity does not match request");
 assert.equal(denied.audit.metadata?.apiKey,"[REDACTED]");
});
test("unauthenticated matching subject remains denied", () => {
 const result = authorize({subject:"a",provider:"t3n",authenticated:false},{agentId:"a",action:"read",resource:"catalog"},defaultPolicy);
 assert.equal(result.executed,false);
 assert.equal(result.audit.decision,"deny");
});
