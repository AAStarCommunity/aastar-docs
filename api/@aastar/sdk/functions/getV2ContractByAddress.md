> **getV2ContractByAddress**(`address`): [`ContractVersion`](../interfaces/ContractVersion.md) \| `undefined`

Defined in: [packages/core/src/contract-versions.ts:322](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/contract-versions.ts#L322)

Get V2 contract by address

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `address` | `string` | Contract address (case-insensitive) |

## Returns

[`ContractVersion`](../interfaces/ContractVersion.md) \| `undefined`

Contract version info or undefined

## Example

```ts
const contract = getV2ContractByAddress('0xB97A20aca3D6770Deca299a1aD9DAFb12d1e5eCf');
if (contract) {
  console.log(`Found: ${contract.name} v${contract.version}`);
}
```
