> **watchProviders**(`onProvider`): () => `void`

Defined in: [packages/dapp/src/eip6963.ts:84](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/dapp/src/eip6963.ts#L84)

Listen for EIP-6963 wallet announcements from other providers in the page.
Useful for composing AirAccount with MetaMask fallback, etc.

Returns a cleanup function to stop listening.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `onProvider` | (`detail`) => `void` |

## Returns

> (): `void`

### Returns

`void`
