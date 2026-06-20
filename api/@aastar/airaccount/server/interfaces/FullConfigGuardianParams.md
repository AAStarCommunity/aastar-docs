Defined in: [packages/airaccount/src/server/services/account-init-config.ts:42](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L42)

Inputs for the full-config (8-field `InitConfig`) account-creation path.

## Properties

### approvedAlgIds?

> `optional` **approvedAlgIds**: `number`[]

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:54](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L54)

Validator algorithm ids approved at init. Defaults (in buildInitConfig) to ECDSA (+P-256).

***

### dailyLimit

> **dailyLimit**: `bigint`

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:52](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L52)

Daily spend limit (wei). MUST be > 0 — a guardian set enables the on-chain GUARD.

***

### ecdsaGuardians?

> `optional` **ecdsaGuardians**: `` `0x${string}` ``[]

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:50](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L50)

Optional ECDSA guardians, installed via the SAME full-config path. NOTE: on this path the
contract does not verify ECDSA acceptance signatures (the config-hash-in-salt binding stands
in for them), so none are required or accepted here.

***

### minDailyLimit?

> `optional` **minDailyLimit**: `bigint`

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:56](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L56)

Floor the daily limit may be lowered to via the guard. Defaults to 0.

***

### p256Guardians

> **p256Guardians**: [`P256GuardianKey`](P256GuardianKey.md)[]

Defined in: [packages/airaccount/src/server/services/account-init-config.ts:44](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/account-init-config.ts#L44)

P-256 (passkey) guardians installed at deploy time. Owner-bootstrap — NO acceptance sig.
