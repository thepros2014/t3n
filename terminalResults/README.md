Microsoft Windows [Version 10.0.26200.9445]
(c) Microsoft Corporation. All rights reserved.

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>npm run build

> t3n-trustgate@0.1.0 build
> tsc -p tsconfig.json


C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>npm test

> t3n-trustgate@0.1.0 test
> tsx --test test/*.test.ts

✔ fails closed on identity mismatch (3.9968ms)
✔ redacts secret metadata (0.884ms)
✔ allows in-scope request (2.0177ms)
✔ denies unknown action (0.4006ms)
✔ requires approval above threshold (0.3164ms)
✔ denies above hard limit even when approved (0.3072ms)
ℹ tests 6
ℹ suites 0
ℹ pass 6
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 493.1424

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>npm run demo

> t3n-trustgate@0.1.0 demo
> tsx src/index.ts

{
  "executed": true,
  "audit": {
    "timestamp": "2026-09-14T02:33:18.565Z",
    "subject": "demo-agent",
    "action": "purchase",
    "resource": "approved-vendor",
    "decision": "allow",
    "reason": "request satisfies mandate",
    "metadata": {
      "purpose": "demo",
      "apiKey": "[REDACTED]"
    }
  }
}

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>  