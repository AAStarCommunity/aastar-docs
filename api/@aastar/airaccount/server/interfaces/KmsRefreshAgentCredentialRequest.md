Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:62](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/kms-agent-service.ts#L62)

Request to refresh (re-mint) an agent's TEE-JWT credential before it expires.

Authenticated with the existing (still-valid) credential via Bearer JWT, plus
a WebAuthn / Legacy passkey assertion from the human key owner.

## Properties

### keyId

> **keyId**: `string`

Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:63](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/kms-agent-service.ts#L63)

***

### passkeyAssertion?

> `optional` **passkeyAssertion**: [`LegacyPasskeyAssertion`](LegacyPasskeyAssertion.md)

Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:65](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/kms-agent-service.ts#L65)

***

### webAuthnAssertion?

> `optional` **webAuthnAssertion**: [`WebAuthnAssertion`](WebAuthnAssertion.md)

Defined in: [packages/airaccount/src/server/services/kms-agent-service.ts:64](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/kms-agent-service.ts#L64)
