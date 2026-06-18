> **getTokenContracts**(`network`): `object`

Defined in: [packages/core/src/contracts.ts:201](https://github.com/AAStarCommunity/aastar-sdk/blob/37c6572664338d9261a1ffb8ec4038bb35e44ea6/packages/core/src/contracts.ts#L201)

Get token system contracts

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"sepolia"` | Network name |

## Returns

`object`

Token contract addresses

### xPNTsFactory

> `readonly` **xPNTsFactory**: `` `0x${string}` `` = `XPNTS_FACTORY_ADDRESS`

## Example

```ts
const tokens = getTokenContracts('sepolia');
console.log(tokens.xPNTsFactory);
console.log(tokens.mySBT);
```
