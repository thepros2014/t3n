# T3N TrustGate

A small authorization gateway combining T3N authentication, deterministic default-deny policy, and redacted audit metadata.

## Architecture

Authenticate identity → construct request using identity.subject → validate identity match → validate action/resource/spend/approval → decision → redacted audit.

The entry point authenticates before constructing the purchase request. Local demo mode uses the deterministic `demo-agent` subject. The authorization layer still rejects mismatched or unauthenticated identities.

`executed: true` means the gateway permits execution. There is no purchase executor, payment, or external business action in this submission.

## Setup and verification

Verified with Node.js 24.19.0. Use a Node version supporting `--env-file`.

```sh
npm ci
npm run build
npm test
npm run demo
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`.
The local demo requires no credentials; leave `T3N_LIVE` unset or false.

For live sandbox verification, copy `.env.example` to a private `.env`, configure your credential locally, and set `T3N_LIVE=true` and `T3N_ENVIRONMENT=sandbox`.

```sh
node --env-file=.env --import tsx src/index.ts
```

Never commit or share `.env` or raw SDK logs. Live mode fails closed without a credential. The adapter derives the signing address, loads the SDK WASM component, configures EthSign, and awaits handshake and authentication before returning that address as the subject.

## Policy and limits

Unknown actions or resources are denied. Allowed actions and resources are independent allowlists, not paired permissions. Non-finite or negative amounts are denied. Amounts above 250 require approval; amounts above 1000 are denied even with approval. Identity comparison remains mandatory.

Approval is currently an input boolean, not a verified human-approval service. The gateway is an in-process prototype with typed callers; it is not a hardened public request API. A production caller must establish trusted approval provenance and runtime input validation.

Audit metadata recursively redacts field names matching token, secret, password, API key, or authorization. This is name-based redaction, not a guarantee that arbitrary free text contains no secrets. Audit subjects are persistent identifiers; published verification evidence omits them.

## Verified results

On 2026-09-14 UTC: build passed, all 8 tests passed, and local demo allowed the sample request. A real sandbox run using the local environment completed successfully with a non-demo subject, `decision: allow`, `executed: true`, and `[REDACTED]` API-key metadata. See `terminalResults/README.md` for sanitized verification details. Unit tests using a synthetic T3N identity do not prove network integration; the separate live run does.

## SDK trust anchor and handover

The SDK integration initially failed compilation because `T3nClientConfig` required `trustAnchor`. The adapter explicitly uses `{ unsafe_trust_server: true }`. This is sandbox/development only; runtime configuration now rejects non-sandbox environments. It does not provide production server trust verification.

Before production, independently review the authentication result semantics, replace the unsafe anchor with verified trust configuration, establish approval provenance and runtime validation, and review logging/privacy and execution boundaries.

For maintenance, install from the lockfile, run build/tests and the local demo after changes, then separately verify sandbox authentication after SDK updates. Review SDK upgrades and trust-anchor changes explicitly. Keep credentials private and regenerate sanitized evidence after verification. Generated output and dependencies are excluded from Git; compiled files belong in `dist/`.
