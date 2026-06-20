> **beginAuthenticationChallenge**(`http`, `keyId`): `Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:262](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/webauthn-ceremony.ts#L262)

Fetch a generic authentication challenge (purpose="authentication").

## Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`KmsHttpClient`](../classes/KmsHttpClient.md) |
| `keyId` | `string` |

## Returns

`Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>
