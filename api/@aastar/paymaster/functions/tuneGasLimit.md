> **tuneGasLimit**(`estimate`, `nominalActual`, `targetEfficiency`): `bigint`

Defined in: [V4/PaymasterUtils.ts:193](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/paymaster/src/V4/PaymasterUtils.ts#L193)

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
