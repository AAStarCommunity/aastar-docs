> `const` **RECOVERY\_THRESHOLD**: `2` = `2`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:32](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L32)

RECOVERY_THRESHOLD — number of distinct guardian approvals required to recover
(or to cancel a recovery). The contract hard-codes `RECOVERY_THRESHOLD = 2`
against a maximum of 3 guardians, i.e. a 2-of-3 social-recovery scheme.

Source of truth: `AAStarAirAccountBase.RECOVERY_THRESHOLD` (internal constant).
