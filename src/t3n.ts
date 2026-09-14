import type { TrustIdentity } from "./types.js";
/** T3N authentication boundary. Live mode deliberately fails closed without a key. */
export async function authenticateWithT3n():Promise<TrustIdentity> {
 const key=process.env.T3N_API_KEY;
 if (!key) throw new Error("T3N_API_KEY is required for live T3N authentication");
 // Import only in live mode so policy/tests remain credential-independent.
 const sdk=await import("@terminal3/t3n-sdk");
 const environment = process.env.T3N_ENVIRONMENT ?? "sandbox";
 if (environment !== "sandbox") throw new Error("Unsafe trust anchor is restricted to sandbox");
 sdk.setEnvironment("sandbox");
 const address=sdk.eth_get_address(key);
 const client = new sdk.T3nClient({
    wasmComponent: await sdk.loadWasmComponent(),
    handlers: { EthSign: sdk.metamask_sign(address, undefined, key) },
    // Sandbox/dev only. The installed SDK requires an explicit trust anchor.
    // Production deployments should use a verified trust anchor instead.
    trustAnchor: { unsafe_trust_server: true } as const,
  });
 await client.handshake();
 const did = await client.authenticate(sdk.createEthAuthInput(address));
 if (typeof did?.value !== "string" || !did.value.startsWith("did:t3n:") || did.value.length <= 8) {
   throw new Error("T3N authentication did not return a valid subject");
 }
 return {subject:did.value,provider:"t3n",authenticated:true};
}
export function localDemoIdentity(agentId:string):TrustIdentity { return {subject:agentId,provider:"local-demo",authenticated:true}; }
