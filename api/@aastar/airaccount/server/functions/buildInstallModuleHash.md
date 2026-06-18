> **buildInstallModuleHash**(`chainId`, `account`, `moduleTypeId`, `module`, `moduleInitData`): `string`

Defined in: [packages/airaccount/src/server/services/module-manager.ts:63](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/airaccount/src/server/services/module-manager.ts#L63)

Build the EIP-191 install hash that guardians must sign.

r5 format: includes keccak256(moduleInitData) to prevent config-swap attacks.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `chainId` | `number` | `undefined` |
| `account` | `string` | `undefined` |
| `moduleTypeId` | [`ModuleTypeId`](../type-aliases/ModuleTypeId.md) | `undefined` |
| `module` | `string` | `undefined` |
| `moduleInitData` | `string` | `"0x"` |

## Returns

`string`

## Example

```ts
const hash = buildInstallModuleHash(chainId, account, 1, moduleAddress, moduleInitData);
const sig = await guardian.signMessage(hexToBytes(hash));
```
