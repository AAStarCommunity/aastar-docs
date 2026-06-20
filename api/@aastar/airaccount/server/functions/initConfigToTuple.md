> **initConfigToTuple**(`c`): readonly `unknown`[]

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:94](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L94)

Flatten a typed [InitConfig](../../../sdk/type-aliases/InitConfig.md) into the POSITIONAL tuple the local human-readable
factory ABI (`AIRACCOUNT_FACTORY_ABI`, fed through viem `parseAbi`) expects as the
`config` argument of `getAddress` / `createAccount`. Field order is consensus-critical
and matches `AAStarAirAccountBase.InitConfig` exactly.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `c` | [`InitConfig`](../../../sdk/type-aliases/InitConfig.md) |

## Returns

readonly `unknown`[]
