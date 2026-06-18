> **lookupAddress**(`address`, `options`): `Promise`\<`string` \| `null`\>

Defined in: [packages/core/src/utils/ens.ts:64](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/utils/ens.ts#L64)

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
