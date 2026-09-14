import test from "node:test";
import assert from "node:assert/strict";
import { evaluatePolicy } from "../src/policy.js";
import { defaultPolicy } from "../src/config.js";
test("allows in-scope request", () => assert.equal(evaluatePolicy({ agentId: "a", action: "read", resource: "catalog" }, defaultPolicy).decision, "allow"));
test("denies unknown action", () => assert.equal(evaluatePolicy({ agentId: "a", action: "delete", resource: "catalog" }, defaultPolicy).decision, "deny"));
test("requires approval above threshold", () => assert.equal(evaluatePolicy({ agentId: "a", action: "purchase", resource: "approved-vendor", amount: 300 }, defaultPolicy).decision, "approval_required"));
test("denies above hard limit even when approved", () => assert.equal(evaluatePolicy({ agentId: "a", action: "purchase", resource: "approved-vendor", amount: 1001, approved: true }, defaultPolicy).decision, "deny"));
