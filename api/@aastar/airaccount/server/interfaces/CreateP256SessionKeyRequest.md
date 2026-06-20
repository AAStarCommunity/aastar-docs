Defined in: [packages/airaccount/src/server/services/kms-session-service.ts:11](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/kms-session-service.ts#L11)

## Properties

### humanKeyId

> **humanKeyId**: `string`

Defined in: [packages/airaccount/src/server/services/kms-session-service.ts:13](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/kms-session-service.ts#L13)

Human (root) key under which the session key is minted.

***

### label?

> `optional` **label**: `string`

Defined in: [packages/airaccount/src/server/services/kms-session-service.ts:15](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/kms-session-service.ts#L15)

Optional human-readable label for the session key.

***

### webAuthnAssertion?

> `optional` **webAuthnAssertion**: [`WebAuthnAssertion`](WebAuthnAssertion.md)

Defined in: [packages/airaccount/src/server/services/kms-session-service.ts:21](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/kms-session-service.ts#L21)

One-time WebAuthn assertion gating creation. The challenge comes from a
generic [KmsManager.beginAuthentication](../classes/KmsManager.md#beginauthentication) ceremony — the caller runs
the ceremony and supplies the resulting assertion here.
