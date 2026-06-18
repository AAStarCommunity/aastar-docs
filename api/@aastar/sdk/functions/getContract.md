> **getContract**(`network`, `category`, `name`): `string`

Defined in: [packages/core/src/contracts.ts:151](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/core/src/contracts.ts#L151)

Get a specific contract address

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"sepolia"` | Network name |
| `category` | [`ContractCategory`](../type-aliases/ContractCategory.md) | Contract category |
| `name` | `string` | Contract name |

## Returns

`string`

Contract address

## Example

```ts
const address = getContract('sepolia', 'core', 'superPaymaster');
```
