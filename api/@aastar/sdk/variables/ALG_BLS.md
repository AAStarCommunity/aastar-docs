> `const` **ALG\_BLS**: `1`

Defined in: [packages/core/src/crypto/dvtWire.ts:54](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/dvtWire.ts#L54)

Account-signature algId byte for the `ALG_BLS` "legacy triple": a DVT BLS aggregate co-sign
PLUS a trailing owner-ECDSA factor (airaccount-contract `_validateTripleSignature`). Note this
is NOT a BLS-only path — the contract requires the owner signature too.
