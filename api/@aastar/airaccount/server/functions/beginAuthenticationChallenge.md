> **beginAuthenticationChallenge**(`http`, `keyId`): `Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:262](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/services/webauthn-ceremony.ts#L262)

Fetch a generic authentication challenge (purpose="authentication").

## Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`KmsHttpClient`](../classes/KmsHttpClient.md) |
| `keyId` | `string` |

## Returns

`Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>
