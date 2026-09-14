/** T3N authentication boundary. Live mode deliberately fails closed without a key. */
export async function authenticateWithT3n() {
    const key = process.env.T3N_API_KEY;
    if (!key)
        throw new Error("T3N_API_KEY is required for live T3N authentication");
    // Import only in live mode so policy/tests remain credential-independent.
    const sdk = await import("@terminal3/t3n-sdk");
    sdk.setEnvironment((process.env.T3N_ENVIRONMENT ?? "sandbox"));
    const address = sdk.eth_get_address(key);
    const client = new sdk.T3nClient({ wasmComponent: await sdk.loadWasmComponent(), handlers: { EthSign: sdk.metamask_sign(address, undefined, key) } });
    await client.handshake();
    await client.authenticate(sdk.createEthAuthInput(address));
    return { subject: address, provider: "t3n", authenticated: true };
}
export function localDemoIdentity(agentId) { return { subject: agentId, provider: "local-demo", authenticated: true }; }
