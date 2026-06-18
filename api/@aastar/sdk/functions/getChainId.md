> **getChainId**(`network`): `number`

Defined in: [packages/core/src/networks.ts:147](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/core/src/networks.ts#L147)

Get chain ID for a network

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"anvil"` \| `"optimism"` \| `"sepolia"` \| `"op-sepolia"` | Network name |

## Returns

`number`

Chain ID number

## Example

```ts
const chainId = getChainId('sepolia');
// 11155111
```
