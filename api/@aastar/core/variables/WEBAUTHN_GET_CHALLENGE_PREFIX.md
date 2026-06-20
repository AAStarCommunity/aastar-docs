> `const` **WEBAUTHN\_GET\_CHALLENGE\_PREFIX**: "\{\"type\":\"webauthn.get\",\"challenge\":\""

Defined in: [packages/core/src/crypto/p256Guardian.ts:66](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/crypto/p256Guardian.ts#L66)

The EXACT `clientDataJSON` prefix the contract requires (operation-type binding). Any other
prefix is rejected on-chain, so a `webauthn.create` (registration) assertion cannot be replayed
through the `webauthn.get` (recovery) path. The base64url(challenge) MUST immediately follow this.
