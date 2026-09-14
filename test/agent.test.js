"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_test_1 = require("node:test");
var strict_1 = require("node:assert/strict");
var agent_js_1 = require("../src/agent.js");
var config_js_1 = require("../src/config.js");
var t3n_js_1 = require("../src/t3n.js");
(0, node_test_1.default)("fails closed on identity mismatch", function () { return strict_1.default.equal((0, agent_js_1.authorize)((0, t3n_js_1.localDemoIdentity)("a"), { agentId: "b", action: "read", resource: "catalog" }, config_js_1.defaultPolicy).executed, false); });
(0, node_test_1.default)("redacts secret metadata", function () { var _a, _b; var r = (0, agent_js_1.authorize)((0, t3n_js_1.localDemoIdentity)("a"), { agentId: "a", action: "read", resource: "catalog", metadata: { apiKey: "secret", nested: { password: "pw" } } }, config_js_1.defaultPolicy); strict_1.default.equal((_a = r.audit.metadata) === null || _a === void 0 ? void 0 : _a.apiKey, "[REDACTED]"); strict_1.default.equal(((_b = r.audit.metadata) === null || _b === void 0 ? void 0 : _b.nested).password, "[REDACTED]"); });
