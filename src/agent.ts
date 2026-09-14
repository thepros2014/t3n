import { makeAudit } from "./audit.js"; import { evaluatePolicy } from "./policy.js";
import type { AgentRequest, AuditRecord, Policy, TrustIdentity } from "./types.js";
export interface AgentResult { executed:boolean; audit:AuditRecord; }
export function authorize(identity:TrustIdentity, req:AgentRequest, policy:Policy):AgentResult {
 if (!identity.authenticated || identity.subject !== req.agentId) { const r={decision:"deny" as const,reason:"trusted identity does not match request"}; return {executed:false,audit:makeAudit(identity,req,r)}; }
 const r=evaluatePolicy(req,policy); return {executed:r.decision==="allow",audit:makeAudit(identity,req,r)};
}
