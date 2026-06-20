> `const` **RECOVERY\_TIMELOCK\_SECONDS**: `bigint`

Defined in: [packages/airaccount/src/server/services/recovery-service.ts:50](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/recovery-service.ts#L50)

RECOVERY_TIMELOCK_SECONDS — delay between `proposeRecovery` and the earliest
`executeRecovery`. The contract hard-codes `RECOVERY_TIMELOCK = 2 days`
(172800 seconds).

NOTE: the prose in `docs/abi/capabilities.md` says "72h"; the deployed
contract uses 2 days (48h). The on-chain constant is authoritative.

Source of truth: `AAStarAirAccountBase.RECOVERY_TIMELOCK` (internal constant).
