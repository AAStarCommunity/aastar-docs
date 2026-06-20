> **encodeWebAuthnAssertion**(`params`): `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:313](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L313)

ABI-encode a WebAuthn assertion into the on-chain `sig` the contract consumes:
`abi.encode(bytes authenticatorData, bytes clientDataJSONPrefix, bytes clientDataJSONSuffix,
 bytes32 r, bytes32 s)`.

Validates the assertion against every constraint the contract enforces so a bad blob fails here
(with a clear message) rather than as a generic on-chain revert:
  - `authenticatorData.length >= 37` and the UP flag (`byte[32] & 0x01`) is set,
  - `clientDataJSON` starts with the exact `webauthn.get` prefix and the 43-char challenge slot
    is immediately followed by the closing `"` (so the contract's reconstruction lines up),
  - `s` is low-S (`<= n/2`) — auto-normalised to `n - s` if the input was high-S (ECDSA-valid).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`EncodeWebAuthnAssertionParams`](../interfaces/EncodeWebAuthnAssertionParams.md) |

## Returns

`` `0x${string}` ``
