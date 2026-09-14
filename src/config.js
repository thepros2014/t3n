"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveT3nEnabled = exports.defaultPolicy = void 0;
exports.defaultPolicy = { allowedActions: ["read", "purchase", "submit"], allowedResources: ["catalog", "approved-vendor", "internal-report"], maxAmount: 1000, approvalThreshold: 250 };
exports.liveT3nEnabled = process.env.T3N_LIVE === "true";
