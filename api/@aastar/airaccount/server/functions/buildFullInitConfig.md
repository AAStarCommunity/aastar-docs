> **buildFullInitConfig**(`p`): [`InitConfig`](../../../sdk/type-aliases/InitConfig.md)

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:79](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-init-config.ts#L79)

Build the full 8-field `InitConfig` for the create path. Delegates to the core
`buildInitConfig` (the 0.22.0 builder) so the P-256 slots, sentinel handling, and
approvedAlgId defaulting are produced by ONE audited implementation — never hand-rolled.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `p` | [`FullConfigGuardianParams`](../interfaces/FullConfigGuardianParams.md) |

## Returns

[`InitConfig`](../../../sdk/type-aliases/InitConfig.md)
