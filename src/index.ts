import { authorize } from "./agent.js"; import { defaultPolicy, liveT3nEnabled } from "./config.js"; import { authenticateWithT3n, localDemoIdentity } from "./t3n.js";
const request={agentId:"demo-agent",action:"purchase",resource:"approved-vendor",amount:120,metadata:{purpose:"demo",apiKey:"must-not-appear"}};
const identity=liveT3nEnabled ? await authenticateWithT3n() : localDemoIdentity(request.agentId);
const result=authorize(identity,request,defaultPolicy); console.log(JSON.stringify(result,null,2));
