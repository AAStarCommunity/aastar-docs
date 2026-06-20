> **buildInitConfig**(`params`): [`InitConfig`](../type-aliases/InitConfig.md)

Defined in: [packages/core/src/actions/initConfig.ts:66](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/core/src/actions/initConfig.ts#L66)

Build a v0.20.0 `InitConfig` with mixed ECDSA + P-256 guardians.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`BuildInitConfigParams`](../interfaces/BuildInitConfigParams.md) |

## Returns

[`InitConfig`](../type-aliases/InitConfig.md)

## Throws

if any slot is ambiguous, the sentinel is misused, or > 3 guardians are given.
