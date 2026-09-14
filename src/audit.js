"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redact = redact;
exports.makeAudit = makeAudit;
var SECRET = /token|secret|password|api[_-]?key|authorization/i;
function redact(value) {
    if (Array.isArray(value))
        return value.map(redact);
    if (value && typeof value === "object")
        return Object.fromEntries(Object.entries(value).map(function (_a) {
            var k = _a[0], v = _a[1];
            return [k, SECRET.test(k) ? "[REDACTED]" : redact(v)];
        }));
    return value;
}
function makeAudit(identity, req, result) {
    return { timestamp: new Date().toISOString(), subject: identity.subject, action: req.action, resource: req.resource, decision: result.decision, reason: result.reason, metadata: redact(req.metadata) };
}
