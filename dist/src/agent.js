import { makeAudit } from "./audit.js";
import { evaluatePolicy } from "./policy.js";
export function authorize(identity, req, policy) {
    if (!identity.authenticated || identity.subject !== req.agentId) {
        const r = { decision: "deny", reason: "trusted identity does not match request" };
        return { executed: false, audit: makeAudit(identity, req, r) };
    }
    const r = evaluatePolicy(req, policy);
    return { executed: r.decision === "allow", audit: makeAudit(identity, req, r) };
}
