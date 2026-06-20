> **createHeliosTransport**(`config`): `Promise`\<[`CustomTransport`](https://viem.sh/docs/index.html)\>

Defined in: [packages/core/src/transports/helios.ts:62](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/transports/helios.ts#L62)

Create a viem custom transport backed by the Helios light client.

Helios is lazy-initialized on the first RPC request so the WASM module
loads only when needed. The returned transport is safe to pass directly
to `createPublicClient`.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`HeliosTransportConfig`](../interfaces/HeliosTransportConfig.md) |

## Returns

`Promise`\<[`CustomTransport`](https://viem.sh/docs/index.html)\>
