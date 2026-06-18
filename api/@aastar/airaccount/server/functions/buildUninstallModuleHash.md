> **buildUninstallModuleHash**(`chainId`, `account`, `moduleTypeId`, `module`): `string`

Defined in: [packages/airaccount/src/server/services/module-manager.ts:83](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/module-manager.ts#L83)

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
