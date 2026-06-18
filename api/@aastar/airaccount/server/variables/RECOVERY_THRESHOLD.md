> `const` **RECOVERY\_THRESHOLD**: `2` = `2`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:30](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/airaccount/src/server/services/recovery-service.ts#L30)

RECOVERY_THRESHOLD — number of distinct guardian approvals required to recover
(or to cancel a recovery). The contract hard-codes `RECOVERY_THRESHOLD = 2`
against a maximum of 3 guardians, i.e. a 2-of-3 social-recovery scheme.

Source of truth: `AAStarAirAccountBase.RECOVERY_THRESHOLD` (internal constant).
