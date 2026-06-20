> **toGuardianSpecs**(`p`): [`GuardianSpec`](../../../sdk/interfaces/GuardianSpec.md)[]

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:67](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/account-init-config.ts#L67)

Map the public params to core [GuardianSpec](../../../sdk/interfaces/GuardianSpec.md)s in a DETERMINISTIC order
(ECDSA slots first, then P-256). Order is consensus-critical: it determines both the
predicted CREATE2 address and the guardian slot index each key occupies on-chain.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `p` | [`FullConfigGuardianParams`](../interfaces/FullConfigGuardianParams.md) |

## Returns

[`GuardianSpec`](../../../sdk/interfaces/GuardianSpec.md)[]
