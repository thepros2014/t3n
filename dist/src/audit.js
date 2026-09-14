const SECRET = /token|secret|password|api[_-]?key|authorization/i;
export function redact(value) {
    if (Array.isArray(value))
        return value.map(redact);
    if (value && typeof value === "object")
        return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, SECRET.test(k) ? "[REDACTED]" : redact(v)]));
    return value;
}
export function makeAudit(identity, req, result) {
    return { timestamp: new Date().toISOString(), subject: identity.subject, action: req.action, resource: req.resource, decision: result.decision, reason: result.reason, metadata: redact(req.metadata) };
}
