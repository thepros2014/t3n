# Sanitized verification evidence

This summary replaces the earlier terminal transcript to omit persistent identifiers and unnecessary raw output. It records observed outcomes without converting earlier failures into successes.

## Historical context (reported before this verification)

- SDK compilation initially failed because trustAnchor was required.
- Earlier local build, 6 tests, and local demo passed.
- Earlier live authentication reached a trusted subject but authorization denied the hard-coded demo-agent mismatch. That denial was correct.

## Current verification — 2026-09-14 UTC

Runtime: Node.js v24.19.0. Commands ran from the t3n folder.

- `npm run build`, `npm test`, and `npm run demo` initially could not launch through PowerShell's npm.ps1 because script execution was disabled.
- `npm.cmd run build`: exit 0.
- `npm.cmd test`: exit 0, 8 tests passed, 0 failed.
- `npm.cmd run demo`: exit 0, subject demo-agent, decision allow, executed true, metadata.apiKey [REDACTED].
- `node --env-file=.env --import tsx src/index.ts`: exit 0. Output captured in memory; raw stdout/stderr were not printed or persisted.

Live validation returned true for every check:
- Process exited successfully.
- Stdout parsed as JSON.
- Subject was nonempty and differed from demo-agent (actual identifier omitted).
- Decision was allow.
- Executed was true.
- metadata.apiKey was [REDACTED].
- The demo secret placeholder was absent from output.
- Stderr was empty.

The credential file and key were not inspected. No comparison against the real key was performed; these checks verify metadata redaction, not a comprehensive arbitrary-secret scan. Only fixed validation booleans were exposed from the live run.

The live path exercises SDK handshake/authentication with a sandbox-only unsafe trust anchor. The execution flag represents authorization permission; no real purchase occurred.
