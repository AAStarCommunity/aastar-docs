> **getTxUrl**(`network`, `txHash`): `string`

Defined in: [packages/core/src/networks.ts:114](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/core/src/networks.ts#L114)

Get transaction URL on block explorer

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"anvil"` \| `"optimism"` \| `"sepolia"` \| `"op-sepolia"` | Network name |
| `txHash` | `string` | Transaction hash |

## Returns

`string`

Full transaction URL

## Example

```ts
const url = getTxUrl('sepolia', '0x123...');
// 'https://sepolia.etherscan.io/tx/0x123...'
```
