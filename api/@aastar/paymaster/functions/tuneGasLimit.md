> **tuneGasLimit**(`estimate`, `nominalActual`, `targetEfficiency`): `bigint`

Defined in: [V4/PaymasterUtils.ts:193](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/paymaster/src/V4/PaymasterUtils.ts#L193)

Tune gas limit using a dynamic nominal ceiling to satisfy Bundler efficiency (0.4)
Target: Actual / Limit >= targetEfficiency

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `estimate` | `bigint` | `undefined` |
| `nominalActual` | `bigint` | `undefined` |
| `targetEfficiency` | `number` | `0.45` |

## Returns

`bigint`
