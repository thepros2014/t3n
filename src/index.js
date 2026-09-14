"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agent_js_1 = require("./agent.js");
var config_js_1 = require("./config.js");
var t3n_js_1 = require("./t3n.js");
var request = { agentId: "demo-agent", action: "purchase", resource: "approved-vendor", amount: 120, metadata: { purpose: "demo", apiKey: "must-not-appear" } };
var identity = config_js_1.liveT3nEnabled ? await (0, t3n_js_1.authenticateWithT3n)() : (0, t3n_js_1.localDemoIdentity)(request.agentId);
var result = (0, agent_js_1.authorize)(identity, request, config_js_1.defaultPolicy);
console.log(JSON.stringify(result, null, 2));
