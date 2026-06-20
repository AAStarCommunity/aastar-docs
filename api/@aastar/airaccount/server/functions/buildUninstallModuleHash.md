> **buildUninstallModuleHash**(`chainId`, `account`, `moduleTypeId`, `module`): `string`

Defined in: [packages/airaccount/src/server/services/module-manager.ts:83](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/module-manager.ts#L83)

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
