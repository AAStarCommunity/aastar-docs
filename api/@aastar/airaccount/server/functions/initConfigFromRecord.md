> **initConfigFromRecord**(`record`): [`InitConfig`](../../../sdk/type-aliases/InitConfig.md)

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:124](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L124)

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
