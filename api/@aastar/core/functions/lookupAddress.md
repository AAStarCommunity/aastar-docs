> **lookupAddress**(`address`, `options`): `Promise`\<`string` \| `null`\>

Defined in: [packages/core/src/utils/ens.ts:64](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/utils/ens.ts#L64)

Reverse-resolve an Ethereum address to its primary ENS name.
Returns null if the address has no reverse record.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `address` | `` `0x${string}` `` |
| `options` | [`EnsOptions`](../interfaces/EnsOptions.md) |

## Returns

`Promise`\<`string` \| `null`\>

## Example

```ts
const name = await lookupAddress('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
```
