> **getBlockExplorer**(`network`): `""` \| `"https://sepolia.etherscan.io"` \| `"https://optimistic.etherscan.io"` \| `"https://sepolia-optimism.etherscan.io"`

Defined in: [packages/core/src/networks.ts:97](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/networks.ts#L97)

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
