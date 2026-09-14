import type { AgentRequest, Policy, PolicyResult } from "./types.js";
export function evaluatePolicy(req:AgentRequest, policy:Policy):PolicyResult {
 if (!req.agentId.trim()) return {decision:"deny",reason:"missing agent identity"};
 if (!policy.allowedActions.includes(req.action)) return {decision:"deny",reason:"action outside mandate"};
 if (!policy.allowedResources.includes(req.resource)) return {decision:"deny",reason:"resource outside mandate"};
 const amount=req.amount ?? 0;
 if (!Number.isFinite(amount) || amount < 0) return {decision:"deny",reason:"invalid amount"};
 if (amount > policy.maxAmount) return {decision:"deny",reason:"amount exceeds hard limit"};
 if (amount > policy.approvalThreshold && !req.approved) return {decision:"approval_required",reason:"human approval required"};
 return {decision:"allow",reason:"request satisfies mandate"};
}
