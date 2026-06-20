> **initConfigFromRecord**(`record`): [`InitConfig`](../../../sdk/type-aliases/InitConfig.md)

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:124](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-init-config.ts#L124)

Reconstruct the BYTE-IDENTICAL `InitConfig` from a persisted record at deploy time.

Re-derivation is exact because the record persists the RESOLVED `approvedAlgIds`,
`minDailyLimit`, and `dailyLimit` (not just the create-time inputs), and `buildInitConfig`
is a pure function of its arguments. The resulting config therefore hashes to the same
`_getConfigHash`, yielding the same CREATE2 address that was predicted at create time.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `record` | [`AccountRecord`](../interfaces/AccountRecord.md) |

## Returns

[`InitConfig`](../../../sdk/type-aliases/InitConfig.md)

## Throws

if the record carries no `guardianSpecs` (i.e. it is not a full-config account).
