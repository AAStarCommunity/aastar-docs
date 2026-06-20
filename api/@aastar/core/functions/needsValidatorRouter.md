> **needsValidatorRouter**(`approvedAlgIds`): `boolean`

Defined in: [packages/core/src/actions/validatorRouter.ts:35](https://github.com/AAStarCommunity/aastar-sdk/blob/938c487df6936d7bd6bee1014bc343b4b9023f9e/packages/core/src/actions/validatorRouter.ts#L35)

True when AT LEAST ONE approved algId is router-delegated (i.e. NOT inline), meaning
the account cannot validate that algorithm until `setValidator(router)` is wired.

An empty list (no algorithms approved) returns `false` — nothing to route.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `approvedAlgIds` | readonly `number`[] | the algIds approved on the account (e.g. the account record's `approvedAlgIds`, or the InitConfig's `approvedAlgIds`). |

## Returns

`boolean`
