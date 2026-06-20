> **decodeWebAuthnAssertion**(`sig`): [`DecodedWebAuthnAssertion`](../interfaces/DecodedWebAuthnAssertion.md)

Defined in: [packages/core/src/crypto/p256Guardian.ts:372](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L372)

Inverse of [encodeWebAuthnAssertion](encodeWebAuthnAssertion.md) — decode an on-chain `sig` blob back into its parts.
Useful for evidence/decode-verification and debugging a rejected signature.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `sig` | `` `0x${string}` `` |

## Returns

[`DecodedWebAuthnAssertion`](../interfaces/DecodedWebAuthnAssertion.md)
