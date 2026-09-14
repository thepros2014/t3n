import { authorize } from "./agent.js";
import { defaultPolicy, liveT3nEnabled } from "./config.js";
import { authenticateWithT3n, localDemoIdentity } from "./t3n.js";
import type { AgentRequest } from "./types.js";

const identity = liveT3nEnabled
  ? await authenticateWithT3n()
  : localDemoIdentity("demo-agent");
const request: AgentRequest = {
  agentId: identity.subject,
  action: "purchase",
  resource: "approved-vendor",
  amount: 120,
  metadata: { purpose: "demo", apiKey: "must-not-appear" },
};
const result = authorize(identity, request, defaultPolicy);
console.log(JSON.stringify(result, null, 2));
