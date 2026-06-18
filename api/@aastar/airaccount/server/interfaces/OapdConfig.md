Defined in: [packages/airaccount/src/server/utils/oapd.ts:23](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/server/utils/oapd.ts#L23)

## Properties

### dappId

> **dappId**: `string`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:27](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/server/utils/oapd.ts#L27)

DApp identifier — use the DApp's domain or contract address

***

### factoryAddress?

> `optional` **factoryAddress**: `string`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:29](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/server/utils/oapd.ts#L29)

Factory address (defaults to M7 Sepolia)

***

### initConfig

> **initConfig**: `object`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:34](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/server/utils/oapd.ts#L34)

InitConfig for the OAPD account.
Typically lower daily limits than the main account.

#### approvedAlgIds

> **approvedAlgIds**: `number`[]

#### dailyLimit

> **dailyLimit**: `bigint`

#### guardians

> **guardians**: \[`string`, `string`, `string`\]

#### initialTokenConfigs

> **initialTokenConfigs**: `object`[]

#### initialTokens

> **initialTokens**: `string`[]

#### minDailyLimit

> **minDailyLimit**: `bigint`

***

### owner

> **owner**: `string`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:25](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/server/utils/oapd.ts#L25)

Account owner address
