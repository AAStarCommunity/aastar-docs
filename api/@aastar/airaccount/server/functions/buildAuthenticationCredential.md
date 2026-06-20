> **buildAuthenticationCredential**(`opts`): `Promise`\<[`WebAuthnAuthenticationCredential`](../interfaces/WebAuthnAuthenticationCredential.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:181](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/webauthn-ceremony.ts#L181)

Build a complete WebAuthn AuthenticationResponseJSON for a dynamic TA
challenge: construct clientDataJSON (embedding the challenge) + authenticatorData,
then sign (authenticatorData || SHA-256(clientDataJSON)).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | [`BuildCredentialOptions`](../interfaces/BuildCredentialOptions.md) |

## Returns

`Promise`\<[`WebAuthnAuthenticationCredential`](../interfaces/WebAuthnAuthenticationCredential.md)\>
