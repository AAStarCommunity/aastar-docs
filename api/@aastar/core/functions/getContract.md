> **getContract**(`network`, `category`, `name`): `string`

Defined in: [packages/core/src/contracts.ts:151](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/contracts.ts#L151)

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
