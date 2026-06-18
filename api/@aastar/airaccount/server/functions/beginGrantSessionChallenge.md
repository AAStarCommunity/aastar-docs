> **beginGrantSessionChallenge**(`http`, `keyId`): `Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:270](https://github.com/AAStarCommunity/aastar-sdk/blob/f84ad01d4a6f445b93e18d397ea2859a5682be1a/packages/airaccount/src/server/services/webauthn-ceremony.ts#L270)

Fetch a grant-session challenge (purpose="grant-session").

## Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`KmsHttpClient`](../classes/KmsHttpClient.md) |
| `keyId` | `string` |

## Returns

`Promise`\<[`BeginCeremonyResponse`](../interfaces/BeginCeremonyResponse.md)\>
