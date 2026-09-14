export const defaultPolicy = { allowedActions: ["read", "purchase", "submit"], allowedResources: ["catalog", "approved-vendor", "internal-report"], maxAmount: 1000, approvalThreshold: 250 };
export const liveT3nEnabled = process.env.T3N_LIVE === "true";
