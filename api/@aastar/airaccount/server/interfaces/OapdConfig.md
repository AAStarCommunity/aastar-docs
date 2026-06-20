Defined in: [packages/airaccount/src/server/utils/oapd.ts:23](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/utils/oapd.ts#L23)

## Properties

### dappId

> **dappId**: `string`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:27](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/utils/oapd.ts#L27)

DApp identifier — use the DApp's domain or contract address

***

### factoryAddress?

> `optional` **factoryAddress**: `string`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:29](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/utils/oapd.ts#L29)

Factory address (defaults to M7 Sepolia)

***

### initConfig

> **initConfig**: `object`

Defined in: [packages/airaccount/src/server/utils/oapd.ts:34](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/utils/oapd.ts#L34)

InitConfig for the OAPD account.
Typically lower daily limits than the main account.

#### approvedAlgIds

> **approvedAlgIds**: `number`[]

#### dailyLimit

> **dailyLimit**: `bigint`

#### guardianP256X

> **guardianP256X**: \[`string`, `string`, `string`\]

#### guardianP256Y

> **guardianP256Y**: \[`string`, `string`, `string`\]

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

Defined in: [packages/airaccount/src/server/utils/oapd.ts:25](https://github.com/AAStarCommunity/aastar-sdk/blob/333c6a5d4c60107a1197c0a393c72c414ed82d56/packages/airaccount/src/server/utils/oapd.ts#L25)

Account owner address
