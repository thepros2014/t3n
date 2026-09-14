# T3N TrustGate

A small enterprise authorization gateway for trusted AI agents. TrustGate combines a T3N-authenticated identity boundary with deterministic, default-deny policy enforcement and redacted audit evidence.

## Why
Enterprise agents should not be able to silently expand their mandate. TrustGate checks identity, action, resource, spend limits and approval thresholds before an action is considered executable.

## Quick start
Requires Node.js 18+.

```bash
npm install
npm test
npm run build
npm run demo
```

The demo runs without credentials using a clearly labeled local identity. Live T3N mode is opt-in and fails closed if `T3N_API_KEY` is absent.

## Live T3N sandbox
Copy `.env.example` to `.env`, keep `.env` private, and set your locally obtained T3N API key. Export/load those variables in your shell, then set `T3N_LIVE=true` and run the demo. Never commit the key.

The T3N adapter follows the documented SDK authentication flow: sandbox environment, address derivation, WASM component, signing handler, handshake and authentication. No T3N credentials are needed for policy unit tests.

## Security properties
- Default deny for unknown actions/resources.
- Hard spend cap cannot be bypassed by approval.
- Human approval threshold for bounded higher-value actions.
- Trusted identity must match the requesting agent.
- Audit metadata recursively redacts common secret fields.
- Live T3N authentication fails closed when credentials are missing.

## Scope
This challenge build intentionally stays small: authorization, trust boundary, evidence, tests and handover. It does not pretend to execute arbitrary financial or production actions.

## T3N SDK trust anchor note

The current T3N SDK requires `trustAnchor` in `T3nClientConfig`. This project uses
`{ unsafe_trust_server: true }` only for sandbox/development verification. Do not
treat that setting as a production trust policy; production deployment should use
a verified trust anchor appropriate to the T3N environment.
