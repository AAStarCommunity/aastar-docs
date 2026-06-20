Defined in: [packages/airaccount/src/server/services/kms-monitor-service.ts:64](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/server/services/kms-monitor-service.ts#L64)

Machine-readable runtime statistics (v0.20.0). Pass-through; the response is
not strongly typed. Known top-level fields:
  - `wallets`  — wallet / key counts
  - `tx`       — transaction / signing counts
  - `queue`    — queue depth and timing metrics
  - `warnings` — active operational warnings

## Indexable

\[`k`: `string`\]: `unknown`
