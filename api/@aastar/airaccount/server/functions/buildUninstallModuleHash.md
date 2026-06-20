> **buildUninstallModuleHash**(`chainId`, `account`, `moduleTypeId`, `module`): `string`

Defined in: [packages/airaccount/src/server/services/module-manager.ts:83](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/module-manager.ts#L83)

Build the EIP-191 uninstall hash that guardians must sign.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `chainId` | `number` |
| `account` | `string` |
| `moduleTypeId` | [`ModuleTypeId`](../type-aliases/ModuleTypeId.md) |
| `module` | `string` |

## Returns

`string`
