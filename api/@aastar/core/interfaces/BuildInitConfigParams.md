Defined in: [packages/core/src/actions/initConfig.ts:43](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L43)

Parameters for [buildInitConfig](../functions/buildInitConfig.md).

## Properties

### approvedAlgIds?

> `optional` **approvedAlgIds**: readonly `number`[]

Defined in: [packages/core/src/actions/initConfig.ts:53](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L53)

Validator algorithm ids approved at init (0x02 = ECDSA, 0x03 = P-256/passkey). If omitted,
deriving from the owner/guardian mix is NOT possible (owner alg is separate), so it defaults
to `[0x02]` (ECDSA) plus `0x03` (P-256) when any P-256 guardian is present — i.e. `[0x02, 0x03]`.

***

### dailyLimit

> **dailyLimit**: `bigint`

Defined in: [packages/core/src/actions/initConfig.ts:47](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L47)

Per-account daily spend limit (wei). Must be > 0 to enable the on-chain GUARD.

***

### guardians?

> `optional` **guardians**: readonly [`GuardianSpec`](GuardianSpec.md)[]

Defined in: [packages/core/src/actions/initConfig.ts:45](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L45)

Up to 3 guardian slots (ECDSA and/or P-256, freely mixed). Empty/omitted ⇒ no guardians.

***

### initialTokenConfigs?

> `optional` **initialTokenConfigs**: readonly [`TokenConfig`](../type-aliases/TokenConfig.md)[]

Defined in: [packages/core/src/actions/initConfig.ts:59](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L59)

Per-token tier configs, index-aligned with `initialTokens`. Defaults to none.

***

### initialTokens?

> `optional` **initialTokens**: readonly `` `0x${string}` ``[]

Defined in: [packages/core/src/actions/initConfig.ts:57](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L57)

ERC-20 tokens to pre-register with the guard. Defaults to none.

***

### minDailyLimit?

> `optional` **minDailyLimit**: `bigint`

Defined in: [packages/core/src/actions/initConfig.ts:55](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L55)

Floor the daily limit can be decreased to via the guard. Defaults to 0.
