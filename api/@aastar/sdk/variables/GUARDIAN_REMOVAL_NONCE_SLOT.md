> `const` **GUARDIAN\_REMOVAL\_NONCE\_SLOT**: `15n` = `15n`

Defined in: [packages/core/src/actions/airAccountExtension.ts:47](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/airAccountExtension.ts#L47)

Storage slots of the mixed-sig operation nonces, taken VERBATIM from the contract's shared layout
`AAStarAgentStorageLayout.sol` (forge-inspect-verified, identical for AAStarAirAccountV7 and
AirAccountExtension — the parity that makes the fallback→delegatecall sharing safe). These nonces
are `internal` (no public getter), so the SDK reads them via `eth_getStorageAt`.

  slot 15 — `_guardianRemovalNonce`   (AAStarAgentStorageLayout.sol:118)
  slot 16 — `_tierLimitNonce`         (AAStarAgentStorageLayout.sol:119)
  slot 38 — `_recoveryNonce`          (AAStarAgentStorageLayout.sol:182; also the public `getRecoveryNonce()`)
  slot 39 — `_guardianAdditionNonce`  (AAStarAgentStorageLayout.sol:186)
