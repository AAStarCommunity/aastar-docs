> **buildInitConfig**(`params`): [`InitConfig`](../type-aliases/InitConfig.md)

Defined in: [packages/core/src/actions/initConfig.ts:70](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/initConfig.ts#L70)

Build a v0.20.0 `InitConfig` with mixed ECDSA + P-256 guardians.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BuildInitConfigParams`](../interfaces/BuildInitConfigParams.md) |

## Returns

[`InitConfig`](../type-aliases/InitConfig.md)

## Throws

if any slot is ambiguous, the sentinel is misused, or > 3 guardians are given.
