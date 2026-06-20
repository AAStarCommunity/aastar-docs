> **runWebAuthnCeremony**(`begin`, `options`): `Promise`\<[`WebAuthnAssertion`](../interfaces/WebAuthnAssertion.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:238](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/webauthn-ceremony.ts#L238)

Run a full WebAuthn challenge-binding ceremony (AirAccount #49):
  1. fetch a one-time TA challenge from the `begin` endpoint,
  2. embed it in clientDataJSON,
  3. build + sign the assertion,
  4. return `{ ChallengeId, Credential }` for the KMS `WebAuthn` /
     `webAuthnAssertion` field.

`begin` is injected so the same helper serves both the generic
(purpose="authentication") and grant-session (purpose="grant-session")
challenge endpoints.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `begin` | () => `Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\> |
| `options` | [`RunCeremonyOptions`](../interfaces/RunCeremonyOptions.md) |

## Returns

`Promise`\<[`WebAuthnAssertion`](../interfaces/WebAuthnAssertion.md)\>
