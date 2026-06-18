> **watchProviders**(`onProvider`): () => `void`

Defined in: [packages/dapp/src/eip6963.ts:84](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/dapp/src/eip6963.ts#L84)

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
