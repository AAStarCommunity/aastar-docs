Defined in: [packages/core/src/crypto/p256Guardian.ts:286](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L286)

Parameters for [encodeWebAuthnAssertion](../functions/encodeWebAuthnAssertion.md).

## Properties

### authenticatorData

> **authenticatorData**: `Uint8Array` \| `` `0x${string}` ``

Defined in: [packages/core/src/crypto/p256Guardian.ts:288](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L288)

`authenticatorData` from the assertion: `rpIdHash(32) || flags(1) || signCount(4)` (≥37 bytes, UP set).

***

### clientDataJSON

> **clientDataJSON**: `string` \| `Uint8Array`

Defined in: [packages/core/src/crypto/p256Guardian.ts:294](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L294)

The FULL `clientDataJSON` the authenticator signed. MUST start with
[WEBAUTHN\_GET\_CHALLENGE\_PREFIX](../variables/WEBAUTHN_GET_CHALLENGE_PREFIX.md), immediately followed by the 43-char base64url(challenge).
Split into prefix/suffix here; the contract rebuilds the challenge on-chain.

***

### r

> **r**: [`ScalarLike`](../type-aliases/ScalarLike.md)

Defined in: [packages/core/src/crypto/p256Guardian.ts:296](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L296)

ES256 signature `r` (32-byte scalar).

***

### s

> **s**: [`ScalarLike`](../type-aliases/ScalarLike.md)

Defined in: [packages/core/src/crypto/p256Guardian.ts:298](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L298)

ES256 signature `s` (32-byte scalar). Auto low-S normalised to satisfy the contract.
