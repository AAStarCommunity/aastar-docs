> **PaymasterType** = `"v4"` \| `"super"`

Defined in: [PaymasterManager.ts:12](https://github.com/AAStarCommunity/aastar-sdk/blob/3f8cdd383a819db0bbb2a41052f39ff7981a46dc/packages/paymaster/src/PaymasterManager.ts#L12)

Supported paymaster types.
- 'v4'    → PaymasterV4 layout (84 bytes): [paymaster(20)][verGas(16)][postGas(16)][token(20)][validUntil(6)][validAfter(6)]
- 'super' → SuperPaymaster layout (104 bytes): [paymaster(20)][verGas(16)][postGas(16)][operator(20)][maxRate(32)]
