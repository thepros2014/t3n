"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluatePolicy = evaluatePolicy;
function evaluatePolicy(req, policy) {
    var _a;
    if (!req.agentId.trim())
        return { decision: "deny", reason: "missing agent identity" };
    if (!policy.allowedActions.includes(req.action))
        return { decision: "deny", reason: "action outside mandate" };
    if (!policy.allowedResources.includes(req.resource))
        return { decision: "deny", reason: "resource outside mandate" };
    var amount = (_a = req.amount) !== null && _a !== void 0 ? _a : 0;
    if (!Number.isFinite(amount) || amount < 0)
        return { decision: "deny", reason: "invalid amount" };
    if (amount > policy.maxAmount)
        return { decision: "deny", reason: "amount exceeds hard limit" };
    if (amount > policy.approvalThreshold && !req.approved)
        return { decision: "approval_required", reason: "human approval required" };
    return { decision: "allow", reason: "request satisfies mandate" };
}
