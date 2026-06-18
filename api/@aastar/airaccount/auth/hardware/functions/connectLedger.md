> **connectLedger**(`config`): `Promise`\<[`LedgerSigner`](../interfaces/LedgerSigner.md)\>

Defined in: [packages/airaccount/src/auth/hardware/ledger.ts:67](https://github.com/AAStarCommunity/aastar-sdk/blob/605127e5698e83b701be3a068b636f758e1cef9c/packages/airaccount/src/auth/hardware/ledger.ts#L67)

Connect to a Ledger device via WebHID and return a LedgerSigner.

Must be called in response to a user gesture (button click, etc.) because
WebHID requestDevice() requires user activation.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`LedgerSignerConfig`](../interfaces/LedgerSignerConfig.md) |

## Returns

`Promise`\<[`LedgerSigner`](../interfaces/LedgerSigner.md)\>

## Example

```ts
const signer = await connectLedger();
const address = await signer.getAddress();
const provider = new AirAccountEIP1193Provider({
  ...,
  accountAddress: myAirAccountAddress,
  signer: (hash) => signer.sign(hash),
});
```
