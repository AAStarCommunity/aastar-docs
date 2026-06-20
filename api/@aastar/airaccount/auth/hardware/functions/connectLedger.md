> **connectLedger**(`config`): `Promise`\<[`LedgerSigner`](../interfaces/LedgerSigner.md)\>

Defined in: [packages/airaccount/src/auth/hardware/ledger.ts:67](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/airaccount/src/auth/hardware/ledger.ts#L67)

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
