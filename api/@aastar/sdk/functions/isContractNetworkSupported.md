> **isContractNetworkSupported**(`network`): `network is "sepolia"`

Defined in: [packages/core/src/contracts.ts:310](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/core/src/contracts.ts#L310)

Check if a network is supported for contracts

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `string` | Network name to check |

## Returns

`network is "sepolia"`

True if network is supported

## Example

```ts
if (isContractNetworkSupported('sepolia')) {
  const contracts = getContracts('sepolia');
}
```
