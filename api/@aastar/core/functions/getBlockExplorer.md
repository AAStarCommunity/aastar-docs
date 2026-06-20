> **getBlockExplorer**(`network`): `""` \| `"https://sepolia.etherscan.io"` \| `"https://optimistic.etherscan.io"` \| `"https://sepolia-optimism.etherscan.io"`

Defined in: [packages/core/src/networks.ts:97](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/networks.ts#L97)

Get block explorer URL

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"anvil"` \| `"optimism"` \| `"sepolia"` \| `"op-sepolia"` | Network name |

## Returns

`""` \| `"https://sepolia.etherscan.io"` \| `"https://optimistic.etherscan.io"` \| `"https://sepolia-optimism.etherscan.io"`

Block explorer base URL

## Example

```ts
const explorer = getBlockExplorer('sepolia');
// 'https://sepolia.etherscan.io'
```
