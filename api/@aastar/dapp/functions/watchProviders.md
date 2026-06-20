> **watchProviders**(`onProvider`): () => `void`

Defined in: [packages/dapp/src/eip6963.ts:84](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/dapp/src/eip6963.ts#L84)

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
