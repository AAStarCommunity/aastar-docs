> **ContractScope** = `object`

Defined in: [packages/core/src/actions/policyRegistry.ts:44](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/actions/policyRegistry.ts#L44)

Per-(sender, target) scope. Selectors are queried via isSelectorAllowed.

## Properties

### allowed

> **allowed**: `boolean`

Defined in: [packages/core/src/actions/policyRegistry.ts:46](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/actions/policyRegistry.ts#L46)

target on this sender's call-target allowlist.

***

### configured

> **configured**: `boolean`

Defined in: [packages/core/src/actions/policyRegistry.ts:54](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/actions/policyRegistry.ts#L54)

false => no scope set for this (sender, target).

***

### requireDVTAlways

> **requireDVTAlways**: `boolean`

Defined in: [packages/core/src/actions/policyRegistry.ts:48](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/actions/policyRegistry.ts#L48)

this target always requires DVT co-sign regardless of amount.

***

### velocityLimit

> **velocityLimit**: `bigint`

Defined in: [packages/core/src/actions/policyRegistry.ts:50](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/actions/policyRegistry.ts#L50)

max cumulative amount routed to this target per window.

***

### velocityWindow

> **velocityWindow**: `bigint`

Defined in: [packages/core/src/actions/policyRegistry.ts:52](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/core/src/actions/policyRegistry.ts#L52)

velocity window length, seconds (0 => no velocity limit).
