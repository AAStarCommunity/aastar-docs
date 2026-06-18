> **buildAuthenticatorData**(`rpId`, `signCount`): `Uint8Array`

Defined in: [packages/airaccount/src/server/services/webauthn-ceremony.ts:158](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/airaccount/src/server/services/webauthn-ceremony.ts#L158)

Build authenticatorData = rpIdHash(32) || flags(1) || signCount(4, big-endian).
flags = 0x05 (UP | UV). `signCount` must strictly increase across ceremonies
for the same wallet (anti-clone check); callers performing multiple sequential
signs should pass an incrementing value.

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `rpId` | `string` | `DEFAULT_RP_ID` |
| `signCount` | `number` | `1` |

## Returns

`Uint8Array`
