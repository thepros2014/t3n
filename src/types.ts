export type Decision = "allow" | "deny" | "approval_required";
export interface AgentRequest { agentId:string; action:string; resource:string; amount?:number; approved?:boolean; metadata?:Record<string,unknown>; }
export interface Policy { allowedActions:string[]; allowedResources:string[]; maxAmount:number; approvalThreshold:number; }
export interface PolicyResult { decision:Decision; reason:string; }
export interface TrustIdentity { subject:string; provider:"t3n"|"local-demo"; authenticated:boolean; }
export interface AuditRecord { timestamp:string; subject:string; action:string; resource:string; decision:Decision; reason:string; metadata?:Record<string,unknown>; }
