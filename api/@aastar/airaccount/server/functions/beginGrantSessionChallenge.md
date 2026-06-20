> **beginGrantSessionChallenge**(`http`, `keyId`): `Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:270](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/airaccount/src/server/services/webauthn-ceremony.ts#L270)

Fetch a grant-session challenge (purpose="grant-session").

## Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`KmsHttpClient`](../classes/KmsHttpClient.md) |
| `keyId` | `string` |

## Returns

`Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>
