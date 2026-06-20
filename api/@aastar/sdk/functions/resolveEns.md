> **resolveEns**(`name`, `options`): `Promise`\<`` `0x${string}` `` \| `null`\>

Defined in: [packages/core/src/utils/ens.ts:49](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/core/src/utils/ens.ts#L49)

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
