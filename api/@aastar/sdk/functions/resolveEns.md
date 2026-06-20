> **resolveEns**(`name`, `options`): `Promise`\<`` `0x${string}` `` \| `null`\>

Defined in: [packages/core/src/utils/ens.ts:49](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/utils/ens.ts#L49)

Forward-resolve an ENS name to an Ethereum address.
Returns null if the name has no address record.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `options` | [`EnsOptions`](../interfaces/EnsOptions.md) |

## Returns

`Promise`\<`` `0x${string}` `` \| `null`\>

## Example

```ts
const address = await resolveEns('vitalik.eth');
```
