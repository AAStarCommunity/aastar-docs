Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:86](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/kms-agent-service.ts#L86)

Request to revoke an agent's credential (WebAuthn-gated).

The challenge is obtained via [KmsManager.beginAuthentication](../classes/KmsManager.md#beginauthentication) (generic,
purpose="authentication"); the caller supplies the resulting assertion here.

## Properties

### keyId

> **keyId**: `string`

Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:87](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/kms-agent-service.ts#L87)

***

### passkeyAssertion?

> `optional` **passkeyAssertion**: [`LegacyPasskeyAssertion`](LegacyPasskeyAssertion.md)

Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:89](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/kms-agent-service.ts#L89)

***

### webAuthnAssertion?

> `optional` **webAuthnAssertion**: [`WebAuthnAssertion`](WebAuthnAssertion.md)

Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:88](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/kms-agent-service.ts#L88)
