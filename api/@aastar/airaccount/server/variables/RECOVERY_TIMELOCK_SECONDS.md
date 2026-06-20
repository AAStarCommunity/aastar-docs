> `const` **RECOVERY\_TIMELOCK\_SECONDS**: `bigint`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:50](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/recovery-service.ts#L50)

RECOVERY_TIMELOCK_SECONDS — delay between `proposeRecovery` and the earliest
`executeRecovery`. The contract hard-codes `RECOVERY_TIMELOCK = 2 days`
(172800 seconds).

NOTE: the prose in `docs/abi/capabilities.md` says "72h"; the deployed
contract uses 2 days (48h). The on-chain constant is authoritative.

Source of truth: `AAStarAirAccountBase.RECOVERY_TIMELOCK` (internal constant).
