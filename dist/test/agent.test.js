import test from "node:test";
import assert from "node:assert/strict";
import { authorize } from "../src/agent.js";
import { defaultPolicy } from "../src/config.js";
import { localDemoIdentity } from "../src/t3n.js";
test("fails closed on identity mismatch", () => assert.equal(authorize(localDemoIdentity("a"), { agentId: "b", action: "read", resource: "catalog" }, defaultPolicy).executed, false));
test("redacts secret metadata", () => { const r = authorize(localDemoIdentity("a"), { agentId: "a", action: "read", resource: "catalog", metadata: { apiKey: "secret", nested: { password: "pw" } } }, defaultPolicy); assert.equal(r.audit.metadata?.apiKey, "[REDACTED]"); assert.equal((r.audit.metadata?.nested).password, "[REDACTED]"); });
