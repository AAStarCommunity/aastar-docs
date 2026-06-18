> **runGrantSessionCeremony**(`http`, `keyId`, `signer`, `options?`): `Promise`\<[`WebAuthnAssertion`](../interfaces/WebAuthnAssertion.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:301](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/webauthn-ceremony.ts#L301)

Convenience: run a grant-session ceremony over an [KmsHttpClient](../classes/KmsHttpClient.md).
Required by sign-grant-session / sign-p256-grant-session, which reject the
generic 'authentication' challenge for cross-op replay safety.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`KmsHttpClient`](../classes/KmsHttpClient.md) |
| `keyId` | `string` |
| `signer` | [`PasskeyCeremonySigner`](../interfaces/PasskeyCeremonySigner.md) |
| `options?` | `Omit`\<[`RunCeremonyOptions`](../interfaces/RunCeremonyOptions.md), `"signer"`\> |

## Returns

`Promise`\<[`WebAuthnAssertion`](../interfaces/WebAuthnAssertion.md)\>
