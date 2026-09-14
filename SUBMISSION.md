# T3N TrustGate — Submission Notes

TrustGate binds a request to an identity established by T3N authentication, applies deterministic default-deny authorization, and produces redacted audit metadata. It is a minimal authorization prototype; no real purchase is performed.

## Verified behavior

Verification on 2026-09-14 UTC with Node.js 24.19.0:
- Build passed.
- All 8 tests passed, including matching authenticated subject, mismatched subject denial, unauthenticated subject denial, redaction, allowed scope, unknown action denial, approval threshold, and hard-limit denial despite approval.
- Local demo passed independently of credentials.
- Live T3N sandbox execution exited successfully with a non-demo subject, allow decision, execution-permitted flag, and redacted API-key metadata.

See `terminalResults/README.md` for sanitized evidence and `README.md` for architecture and setup.

## Integration findings and limitations

The original live request used `demo-agent`, producing a correct identity-mismatch denial. The entry point now authenticates first and binds request.agentId to identity.subject. Authorization checks were preserved.

The SDK required an explicit trustAnchor during compilation. The sandbox-only unsafe trust-server setting remains in use, with a runtime guard rejecting other environments. Production trust is not demonstrated.

Approval is a boolean supplied by a trusted caller, not a verified human approval workflow. Redaction is based on metadata field names. Identity objects are an internal trust boundary. There is no external action executor or production API. Independent security review remains required, especially for SDK authentication semantics and production trust anchors.

## Maintenance and handover

Install dependencies from the lockfile, run build/tests/demo, configure private sandbox credentials, and repeat live verification after adapter or SDK changes. Keep policy, authentication, and audit logic separate. Review dependency updates and preserve denial tests. Publish only sanitized evidence; keep credentials and generated files out of source control.

Prepared for review only. No bounty submission or payout/account action was performed.
