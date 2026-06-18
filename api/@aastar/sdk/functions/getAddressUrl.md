> **getAddressUrl**(`network`, `address`): `string`

Defined in: [packages/core/src/networks.ts:131](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/core/src/networks.ts#L131)

Get address URL on block explorer

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"anvil"` \| `"optimism"` \| `"sepolia"` \| `"op-sepolia"` | Network name |
| `address` | `string` | Contract or wallet address |

## Returns

`string`

Full address URL

## Example

```ts
const url = getAddressUrl('sepolia', '0xabc...');
// 'https://sepolia.etherscan.io/address/0xabc...'
```
