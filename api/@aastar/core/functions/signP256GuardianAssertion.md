> **signP256GuardianAssertion**(`params`): [`SignedP256GuardianAssertion`](../interfaces/SignedP256GuardianAssertion.md)

Defined in: [packages/core/src/crypto/p256Guardian.ts:542](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L542)

Software P-256 authenticator — produces a FULL WebAuthn assertion over `challenge`, byte-for-byte
in the format `navigator.credentials.get()` returns (mirrors the contract's
`test/webauthn/gen_p256_assertion.mjs`). The only difference vs a hardware passkey is WHERE the
key lives. Use for the on-chain evidence E2E and for relaying software-held guardian keys.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SignP256GuardianAssertionParams`](../interfaces/SignP256GuardianAssertionParams.md) |

## Returns

[`SignedP256GuardianAssertion`](../interfaces/SignedP256GuardianAssertion.md)
