> `const` **EIP3009\_TYPES**: `object`

Defined in: [packages/x402/src/eip3009.ts:3](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/x402/src/eip3009.ts#L3)

## Type Declaration

### CancelAuthorization

> `readonly` **CancelAuthorization**: readonly \[\{ `name`: `"authorizer"`; `type`: `"address"`; \}, \{ `name`: `"nonce"`; `type`: `"bytes32"`; \}\]

### ReceiveWithAuthorization

> `readonly` **ReceiveWithAuthorization**: readonly \[\{ `name`: `"from"`; `type`: `"address"`; \}, \{ `name`: `"to"`; `type`: `"address"`; \}, \{ `name`: `"value"`; `type`: `"uint256"`; \}, \{ `name`: `"validAfter"`; `type`: `"uint256"`; \}, \{ `name`: `"validBefore"`; `type`: `"uint256"`; \}, \{ `name`: `"nonce"`; `type`: `"bytes32"`; \}\]

### TransferWithAuthorization

> `readonly` **TransferWithAuthorization**: readonly \[\{ `name`: `"from"`; `type`: `"address"`; \}, \{ `name`: `"to"`; `type`: `"address"`; \}, \{ `name`: `"value"`; `type`: `"uint256"`; \}, \{ `name`: `"validAfter"`; `type`: `"uint256"`; \}, \{ `name`: `"validBefore"`; `type`: `"uint256"`; \}, \{ `name`: `"nonce"`; `type`: `"bytes32"`; \}\]
