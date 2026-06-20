Defined in: [packages/core/src/actions/initConfig.ts:39](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L39)

Parameters for [buildInitConfig](../functions/buildInitConfig.md).

## Properties

### approvedAlgIds?

> `optional` **approvedAlgIds**: readonly `number`[]

Defined in: [packages/core/src/actions/initConfig.ts:49](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L49)

Validator algorithm ids approved at init (e.g. 2 = ECDSA, 1 = P-256/passkey). If omitted,
derived from the owner/guardian mix is NOT possible (owner alg is separate), so it defaults
to `[2]` (ECDSA) plus `1` (P-256) when any P-256 guardian is present.

***

### dailyLimit

> **dailyLimit**: `bigint`

Defined in: [packages/core/src/actions/initConfig.ts:43](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L43)

Per-account daily spend limit (wei). Must be > 0 to enable the on-chain GUARD.

***

### guardians?

> `optional` **guardians**: readonly [`GuardianSpec`](GuardianSpec.md)[]

Defined in: [packages/core/src/actions/initConfig.ts:41](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L41)

Up to 3 guardian slots (ECDSA and/or P-256, freely mixed). Empty/omitted ⇒ no guardians.

***

### initialTokenConfigs?

> `optional` **initialTokenConfigs**: readonly [`TokenConfig`](../type-aliases/TokenConfig.md)[]

Defined in: [packages/core/src/actions/initConfig.ts:55](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L55)

Per-token tier configs, index-aligned with `initialTokens`. Defaults to none.

***

### initialTokens?

> `optional` **initialTokens**: readonly `` `0x${string}` ``[]

Defined in: [packages/core/src/actions/initConfig.ts:53](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L53)

ERC-20 tokens to pre-register with the guard. Defaults to none.

***

### minDailyLimit?

> `optional` **minDailyLimit**: `bigint`

Defined in: [packages/core/src/actions/initConfig.ts:51](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L51)

Floor the daily limit can be decreased to via the guard. Defaults to 0.
