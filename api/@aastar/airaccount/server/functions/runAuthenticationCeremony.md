> **runAuthenticationCeremony**(`http`, `keyId`, `signer`, `options?`): `Promise`\<[`WebAuthnAssertion`](../interfaces/WebAuthnAssertion.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:284](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/webauthn-ceremony.ts#L284)

Convenience: run a generic authentication ceremony over an [KmsHttpClient](../classes/KmsHttpClient.md).
Covers DeriveAddress / Sign / SignHash / SignTypedData / agent-key /
p256-session signing paths.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`KmsHttpClient`](../classes/KmsHttpClient.md) |
| `keyId` | `string` |
| `signer` | [`PasskeyCeremonySigner`](../interfaces/PasskeyCeremonySigner.md) |
| `options?` | `Omit`\<[`RunCeremonyOptions`](../interfaces/RunCeremonyOptions.md), `"signer"`\> |

## Returns

`Promise`\<[`WebAuthnAssertion`](../interfaces/WebAuthnAssertion.md)\>
