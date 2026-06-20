> **getV2ContractByName**(`name`): [`ContractVersion`](../interfaces/ContractVersion.md) \| `undefined`

Defined in: [packages/core/src/contract-versions.ts:303](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/contract-versions.ts#L303)

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
