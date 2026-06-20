> **decodeWebAuthnAssertion**(`sig`): [`DecodedWebAuthnAssertion`](../interfaces/DecodedWebAuthnAssertion.md)

Defined in: [packages/core/src/crypto/p256Guardian.ts:372](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L372)

Inverse of [encodeWebAuthnAssertion](encodeWebAuthnAssertion.md) — decode an on-chain `sig` blob back into its parts.
Useful for evidence/decode-verification and debugging a rejected signature.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sig` | `` `0x${string}` `` |

## Returns

[`DecodedWebAuthnAssertion`](../interfaces/DecodedWebAuthnAssertion.md)
