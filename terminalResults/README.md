Microsoft Windows [Version 10.0.26200.9445]
(c) Microsoft Corporation. All rights reserved.

C:\Users\SnapCopy>cd C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>npm run build

> t3n-trustgate@0.1.0 build
> tsc -p tsconfig.json


C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>npm test

> t3n-trustgate@0.1.0 test
> tsx --test test/*.test.ts

✔ fails closed on identity mismatch (2.3698ms)
✔ redacts secret metadata (0.511ms)
✔ allows in-scope request (1.3252ms)
✔ denies unknown action (0.29ms)
✔ requires approval above threshold (0.2745ms)
✔ denies above hard limit even when approved (3.7113ms)
ℹ tests 6
ℹ suites 0
ℹ pass 6
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 312.7946

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>npm run demo

> t3n-trustgate@0.1.0 demo
> tsx src/index.ts

{
  "executed": true,
  "audit": {
    "timestamp": "2026-09-14T02:38:27.230Z",
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

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env --import tsx src/index.ts
{
  "executed": true,
  "audit": {
    "timestamp": "2026-09-14T03:07:53.411Z",
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

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env -e "console.log({live:process.env.T3N_LIVE,environment:process.env.T3N_ENVIRONMENT,keyLoaded:Boolean(process.env.T3N_API_KEY)})”
[eval]:1
console.log({live:process.env.T3N_LIVE,environment:process.env.T3N_ENVIRONMENT,keyLoaded:Boolean(process.env.T3N_API_KEY)})”
                                                                                                                        
Expected ';', '}' or <eof>

SyntaxError: Invalid or unexpected token
    at makeContextifyScript (node:internal/vm:194:14)
    at compileScript (node:internal/process/execution:388:10)
    at evalTypeScript (node:internal/process/execution:260:22)
    at node:internal/main/eval_string:71:3

Node.js v24.19.0

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env -e "console.log

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>dir
 Volume in drive C is Windows
 Volume Serial Number is E01A-8B28

 Directory of C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n

09/13/2026  07:55 PM    <DIR>          .
09/13/2026  07:55 PM    <DIR>          ..
09/13/2026  07:53 PM                 0 .env
09/13/2026  08:06 PM               173 .env.example
09/14/2026  01:21 AM                62 .gitignore
09/13/2026  06:17 PM    <DIR>          dist
09/13/2026  06:17 PM    <DIR>          node_modules
09/13/2026  07:20 PM            24,012 package-lock.json
09/14/2026  01:21 AM               309 package.json
09/14/2026  01:21 AM             2,003 README.md
09/13/2026  07:32 PM    <DIR>          src
09/14/2026  01:21 AM             1,766 SUBMISSION.md
09/13/2026  07:25 PM    <DIR>          terminalResults
09/13/2026  07:32 PM    <DIR>          test
09/14/2026  01:21 AM               250 tsconfig.json
               8 File(s)         28,575 bytes
               7 Dir(s)  138,170,417,152 bytes free

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env --import tsx src/index.ts
{
  "executed": true,
  "audit": {
    "timestamp": "2026-09-14T03:13:37.697Z",
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

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env --import tsx src/index.ts
{
  "executed": true,
  "audit": {
    "timestamp": "2026-09-14T03:14:40.664Z",
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

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>cd C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>dir
 Volume in drive C is Windows
 Volume Serial Number is E01A-8B28

 Directory of C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n

09/13/2026  07:55 PM    <DIR>          .
09/13/2026  07:55 PM    <DIR>          ..
09/13/2026  08:12 PM               177 .env
09/13/2026  08:12 PM               107 .env.example
09/14/2026  01:21 AM                62 .gitignore
09/13/2026  06:17 PM    <DIR>          dist
09/13/2026  06:17 PM    <DIR>          node_modules
09/13/2026  07:20 PM            24,012 package-lock.json
09/14/2026  01:21 AM               309 package.json
09/14/2026  01:21 AM             2,003 README.md
09/13/2026  07:32 PM    <DIR>          src
09/14/2026  01:21 AM             1,766 SUBMISSION.md
09/13/2026  07:25 PM    <DIR>          terminalResults
09/13/2026  07:32 PM    <DIR>          test
09/14/2026  01:21 AM               250 tsconfig.json
               8 File(s)         28,686 bytes
               7 Dir(s)  138,156,097,536 bytes free

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env --import tsx src/index.ts
{
  "executed": false,
  "audit": {
    "timestamp": "2026-09-14T03:23:45.762Z",
    "subject": "0xc7ada4d95aa56acafe421216b30e9c415663a3de",
    "action": "purchase",
    "resource": "approved-vendor",
    "decision": "deny",
    "reason": "trusted identity does not match request",
    "metadata": {
      "purpose": "demo",
      "apiKey": "[REDACTED]"
    }
  }
}

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>cd C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>dir
 Volume in drive C is Windows
 Volume Serial Number is E01A-8B28

 Directory of C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n

09/13/2026  07:55 PM    <DIR>          .
09/13/2026  07:55 PM    <DIR>          ..
09/13/2026  08:21 PM               172 .env
09/13/2026  08:19 PM               107 .env.example
09/14/2026  01:21 AM                62 .gitignore
09/13/2026  06:17 PM    <DIR>          dist
09/13/2026  06:17 PM    <DIR>          node_modules
09/13/2026  07:20 PM            24,012 package-lock.json
09/14/2026  01:21 AM               309 package.json
09/14/2026  01:21 AM             2,003 README.md
09/13/2026  07:32 PM    <DIR>          src
09/14/2026  01:21 AM             1,766 SUBMISSION.md
09/13/2026  07:25 PM    <DIR>          terminalResults
09/13/2026  07:32 PM    <DIR>          test
09/14/2026  01:21 AM               250 tsconfig.json
               8 File(s)         28,681 bytes
               7 Dir(s)  138,142,838,784 bytes free

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env --import tsx src/index.ts
{
  "executed": false,
  "audit": {
    "timestamp": "2026-09-14T03:26:43.125Z",
    "subject": "0xc7ada4d95aa56acafe421216b30e9c415663a3de",
    "action": "purchase",
    "resource": "approved-vendor",
    "decision": "deny",
    "reason": "trusted identity does not match request",
    "metadata": {
      "purpose": "demo",
      "apiKey": "[REDACTED]"
    }
  }
}

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env -e "console.log({live:process.env.T3N_LIVE,environment:process.env.T3N_ENVIRONMENT,keyLoaded:Boolean(process.env.T3N_API_KEY)})”
[eval]:1
console.log({live:process.env.T3N_LIVE,environment:process.env.T3N_ENVIRONMENT,keyLoaded:Boolean(process.env.T3N_API_KEY)})”
                                                                                                                        
Expected ';', '}' or <eof>

SyntaxError: Invalid or unexpected token
    at makeContextifyScript (node:internal/vm:194:14)
    at compileScript (node:internal/process/execution:388:10)
    at evalTypeScript (node:internal/process/execution:260:22)
    at node:internal/main/eval_string:71:3

Node.js v24.19.0

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>node --env-file=.env -e "console.log

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>^A

C:\Users\SnapCopy\OneDrive\Documents\superteam\t3n>