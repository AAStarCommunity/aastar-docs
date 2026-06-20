> `const` **WEBAUTHN\_GET\_CHALLENGE\_PREFIX**: "\{\"type\":\"webauthn.get\",\"challenge\":\""

Defined in: [packages/core/src/crypto/p256Guardian.ts:66](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/crypto/p256Guardian.ts#L66)

The EXACT `clientDataJSON` prefix the contract requires (operation-type binding). Any other
prefix is rejected on-chain, so a `webauthn.create` (registration) assertion cannot be replayed
through the `webauthn.get` (recovery) path. The base64url(challenge) MUST immediately follow this.
