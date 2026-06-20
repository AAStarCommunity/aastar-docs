> **buildFullInitConfig**(`p`): [`InitConfig`](../../../sdk/type-aliases/InitConfig.md)

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:79](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L79)

Build the full 8-field `InitConfig` for the create path. Delegates to the core
`buildInitConfig` (the 0.22.0 builder) so the P-256 slots, sentinel handling, and
approvedAlgId defaulting are produced by ONE audited implementation — never hand-rolled.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `p` | [`FullConfigGuardianParams`](../interfaces/FullConfigGuardianParams.md) |

## Returns

[`InitConfig`](../../../sdk/type-aliases/InitConfig.md)
