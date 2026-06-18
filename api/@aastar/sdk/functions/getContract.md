> **getContract**(`network`, `category`, `name`): `string`

Defined in: [packages/core/src/contracts.ts:151](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/core/src/contracts.ts#L151)

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
