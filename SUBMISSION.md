# T3N Agent Build Challenge — Submission Notes

## Project
T3N TrustGate — enterprise authorization gateway for trusted AI agents.

## Usefulness
TrustGate prevents an agent from silently expanding its mandate. A request must match its trusted identity, allowed action/resource, hard amount limit and approval policy before execution is permitted.

## Maintainability
The T3N authentication adapter, deterministic policy engine and audit layer are separated. Core behavior is testable without credentials. Live T3N mode is explicit and fails closed.

## Demonstration evidence to capture
1. `npm test` passing.
2. `npm run build` passing.
3. Demo showing an allowed request.
4. Change action to an unknown action and capture denial.
5. Change amount above approval threshold and capture `approval_required`.
6. Confirm secret-like metadata renders as `[REDACTED]`.
7. After obtaining T3N credentials locally, capture successful sandbox authentication without exposing the key.

## Handover
I am willing to continue maintaining the agent. Handover is also straightforward: clone the public repository, install dependencies, configure a new T3N API key locally, run tests/build, then enable live mode. Credentials are never stored in source control.

## Known issues / bugs
Record only bugs actually reproduced during the final T3N sandbox run. Do not claim unverified SDK bugs as project findings.
