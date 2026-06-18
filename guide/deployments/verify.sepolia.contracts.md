# Verified SuperPaymaster Contracts (Sepolia)

The following contracts are deployed on the Sepolia testnet. Addresses track the
canonical address book in `@aastar/core` (`CANONICAL_ADDRESSES[11155111]`), the
single source of truth used by the SDK.

- **[Deployments (Default: Optimism)](./)**  
- **[Optimism](./verify.optimism.contracts)**  
- **[OP-Sepolia](./verify.op-sepolia.contracts)**  

| Contract Name | Address | Etherscan Link |
| :--- | :--- | :--- |
| **SuperPaymaster** | `0x030025f40d509b1a99547bAEb3795bD27F7182b7` | [View on Etherscan](https://sepolia.etherscan.io/address/0x030025f40d509b1a99547bAEb3795bD27F7182b7#code) |
| **Registry** | `0x3F920B25f8b65988359C372F66F036E48adFc556` | [View on Etherscan](https://sepolia.etherscan.io/address/0x3F920B25f8b65988359C372F66F036E48adFc556#code) |
| **GToken** | `0x20a051502a7AE6e40cfFd6EBe59057538E698984` | [View on Etherscan](https://sepolia.etherscan.io/address/0x20a051502a7AE6e40cfFd6EBe59057538E698984#code) |
| **aPNTs** | `0x9e66B457E0ABb1F139FD8A596d00f784eBA2873b` | [View on Etherscan](https://sepolia.etherscan.io/address/0x9e66B457E0ABb1F139FD8A596d00f784eBA2873b#code) |
| **xPNTsFactory** | `0xCec3655525a112882E74Fb7C26AcB267a07724cb` | [View on Etherscan](https://sepolia.etherscan.io/address/0xCec3655525a112882E74Fb7C26AcB267a07724cb#code) |
| **GTokenStaking** | `0x3B363598746Ea57314d4869B160940948c569D48` | [View on Etherscan](https://sepolia.etherscan.io/address/0x3B363598746Ea57314d4869B160940948c569D48#code) |
| **MySBT** | `0x072A0D12f4212B6baD7c6d0A633eaffbDE9105bF` | [View on Etherscan](https://sepolia.etherscan.io/address/0x072A0D12f4212B6baD7c6d0A633eaffbDE9105bF#code) |
| **ReputationSystem** | `0x7fEd690E1663755e24a1C9d6164336809d68a578` | [View on Etherscan](https://sepolia.etherscan.io/address/0x7fEd690E1663755e24a1C9d6164336809d68a578#code) |
| **DVTValidator** | `0x19BA9829C784E4A41b68960b9c0bA55f83718997` | [View on Etherscan](https://sepolia.etherscan.io/address/0x19BA9829C784E4A41b68960b9c0bA55f83718997#code) |
| **BLSAggregator** | `0x15387e161c1b3dAe7c66Fbd5c1F32837B58B2e79` | [View on Etherscan](https://sepolia.etherscan.io/address/0x15387e161c1b3dAe7c66Fbd5c1F32837B58B2e79#code) |
| **PaymasterFactory** | `0x0Aa06EA5295eeD4D48c93c594Db1CBf3626971A5` | [View on Etherscan](https://sepolia.etherscan.io/address/0x0Aa06EA5295eeD4D48c93c594Db1CBf3626971A5#code) |
| **PaymasterV4Impl** | `0x59DCA5861aaDA602fE1BFbfcc36DFAc36C58623d` | [View on Etherscan](https://sepolia.etherscan.io/address/0x59DCA5861aaDA602fE1BFbfcc36DFAc36C58623d#code) |

> **PaymasterV4** `0x1f0D4eF151a79948070D387BaC43b1321F0c41e3` is a per-community AOA proxy
> (not part of the core protocol config) — verify it separately.
> **BLSValidator** `0x0A71C5a32b8CBC517523D2C88b539Ab22AeF0654` is deprecated; the aggregator verifies BLS inline.

---
*Note: EntryPoint `0x0000000071727De22E5E9d8BAf0edAc6f37da032` and SimpleAccountFactory `0x91E60e0613810449d098b0b5Ec8b51A0FE8c8985` are infrastructure contracts and are already verified.*
