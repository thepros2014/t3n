"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = authorize;
var audit_js_1 = require("./audit.js");
var policy_js_1 = require("./policy.js");
function authorize(identity, req, policy) {
    if (!identity.authenticated || identity.subject !== req.agentId) {
        var r_1 = { decision: "deny", reason: "trusted identity does not match request" };
        return { executed: false, audit: (0, audit_js_1.makeAudit)(identity, req, r_1) };
    }
    var r = (0, policy_js_1.evaluatePolicy)(req, policy);
    return { executed: r.decision === "allow", audit: (0, audit_js_1.makeAudit)(identity, req, r) };
}
