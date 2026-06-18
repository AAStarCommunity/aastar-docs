> **buildUninstallModuleHash**(`chainId`, `account`, `moduleTypeId`, `module`): `string`

Defined in: [packages/airaccount/src/server/services/module-manager.ts:83](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/server/services/module-manager.ts#L83)

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
