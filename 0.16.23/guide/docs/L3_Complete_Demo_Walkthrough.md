# L3 Complete Lifecycle Demo Walkthrough

本教程将带你走完 AAstar 协议的完整生命周期，包括社区创建、运营商入驻、用户加入以及免 Gas 交易。

## 场景概述

在这个 Demo 中，我们模拟两个角色：
1.  **Alice (社区领袖 & 运营商)**: 她创建一个名为 "AliceDAO" 的社区，并运行一个 SuperPaymaster 节点来为她的成员通过赞助。
2.  **Bob (终端用户)**: 他加入 Alice 的社区，获得 SBT 身份，并发送一笔由 Alice 赞助的免 Gas 交易。

## 源码位置

你可以从 SDK 仓库中找到该完整示例：
`examples/for-iri/ts/src/l3-lifecycle-demo.ts`

---

## 核心步骤解析

### 1. 社区创建 (Community Launch)

Alice 使用 `CommunityClient` 一键启动社区。这会自动完成角色注册、xPNTs 代币部署和信誉规则初始化。

```typescript
const aliceCommunity = new CommunityClient({ ... });

await aliceCommunity.setupCommunity({
    name: "AliceDAO",
    tokenSymbol: "ALICE",
    stakeAmount: parseEther('30') // 质押 30 GToken 启动社区
});
```

### 2. 运营商入驻 (Operator Onboarding)

Alice 决定作为 SuperPaymaster 运营商，为社区提供 Gas 代付服务。

```typescript
const aliceOperator = new OperatorLifecycle({ ... });

// 一键完成：质押 GToken + 注册角色 + 存入 Gas 备用金
await aliceOperator.setupNode({
    type: 'SUPER',
    stakeAmount: parseEther('50'),
    depositAmount: parseEther('100')
});

// 配置支持的代币和收益提现地址
await aliceOperator.configureOperator(xPNTsToken, aliceAcc.address, parseEther('1'));
```

### 3. 用户加入 (User Onboarding)

Bob 发现 Alice 的社区很棒，决定加入。

```typescript
const bobL3 = new UserLifecycle({ ... });

// 检查是否满足加入条件，然后执行一键 onboard
if (await bobL3.checkEligibility(aliceAddr)) {
    await bobL3.onboard(aliceAddr, parseEther('0.4')); // 质押少量 GToken 并铸造 SBT
}
```

### 4. 免 Gas 交易 (Gasless Transaction)

Bob 现在是社区成员了，他发送交易时无需支付 native ETH。

```typescript
const userOpHash = await SuperPaymasterClient.submitGaslessTransaction(
    publicClient,
    bobClient,
    bobAA,
    entryPoint,
    bundlerUrl,
    {
        token: GTOKEN_ADDRESS,
        recipient: aliceAddr,
        amount: parseEther('0.1'),
        operator: aliceAddr, // 指定由 Alice 的节点赞助
        paymasterAddress: SUPER_PAYMASTER
    }
);
```

### 5. 退出流程 (Exit Phase)

最后，Bob 离开社区，Alice 撤出运营商资金。

```typescript
// Bob 离开
await bobL3.leaveCommunity(aliceAddr);

// Alice 撤资（受协议锁定期限制）
await aliceOperator.withdrawAllFunds();
```

---

## 如何运行

1.  配置 `examples/for-iri/ts/.env` 文件，确保包含必要的合约地址和私钥。
2.  安装依赖：`pnpm install`
3.  执行 Demo：
    ```bash
    npx tsx src/l3-lifecycle-demo.ts
    ```

> [!IMPORTANT]
> 免 Gas 交易步骤需要配置有效的 Bundler URL (如 Pimlico 或 Alchemy)。如果仅在本地 Anvil 测试，该步骤可能会因为缺乏 Bundler 环境而跳过。
