> **announceAirAccount**(`provider`, `info`): () => `void`

Defined in: [packages/dapp/src/eip6963.ts:48](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/dapp/src/eip6963.ts#L48)

Announce AirAccount as an EIP-6963 wallet so DApps can auto-discover it.

Call this once at app startup. Returns a cleanup function that removes the
event listener when the wallet is no longer available.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `provider` | [`AirAccountEIP1193Provider`](../classes/AirAccountEIP1193Provider.md) |
| `info` | `Partial`\<[`EIP6963ProviderInfo`](../interfaces/EIP6963ProviderInfo.md)\> |

## Returns

> (): `void`

### Returns

`void`

## Example

```ts
const provider = new AirAccountEIP1193Provider({ ... });
const cleanup = announceAirAccount(provider);
// later: cleanup() to stop announcing
```
