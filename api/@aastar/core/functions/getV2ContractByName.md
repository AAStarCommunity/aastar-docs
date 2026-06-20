> **getV2ContractByName**(`name`): [`ContractVersion`](../interfaces/ContractVersion.md) \| `undefined`

Defined in: [packages/core/src/contract-versions.ts:303](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/contract-versions.ts#L303)

Get V2 contract by name

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Contract name |

## Returns

[`ContractVersion`](../interfaces/ContractVersion.md) \| `undefined`

Contract version info or undefined

## Example

```ts
const contract = getV2ContractByName('SuperPaymasterV2');
if (contract) {
  console.log(`Version: ${contract.version}`);
}
```
