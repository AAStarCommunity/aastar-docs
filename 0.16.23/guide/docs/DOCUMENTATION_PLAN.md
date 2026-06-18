# AAStar SDK 文档生成和发布方案

## 概述

本文档定义了AAStar SDK的完整文档生成、维护和发布流程。

---

## 1. 技术栈选择

### 推荐方案: VitePress

**优势**:
- ⚡ 基于Vite,构建速度极快
- 📝 原生Markdown支持
- 🎨 Vue组件集成
- 🔍 内置全文搜索
- 📱 响应式设计
- 🚀 零配置部署到GitHub Pages/Vercel

**替代方案**: Docusaurus (React生态)

---

## 2. 仓库架构

### 2.1 SDK仓库 (`aastar-sdk`)

```
aastar-sdk/
├── packages/                    # SDK源码
│   ├── core/
│   ├── account/
│   ├── paymaster/
│   └── ...
├── docs/                        # 文档源文件
│   ├── guide/                   # 手写指南
│   │   ├── getting-started.md
│   │   ├── concepts.md
│   │   └── use-cases/
│   │       ├── community-management.md
│   │       ├── gasless-transactions.md
│   │       └── operator-staking.md
│   ├── api/                     # 自动生成的API文档
│   │   ├── core.md
│   │   ├── account.md
│   │   └── ...
│   └── examples/                # 完整示例
│       ├── operator-flow.md
│       ├── community-flow.md
│       └── enduser-flow.md
├── scripts/
│   ├── generate-api-docs.ts    # API文档生成脚本
│   └── sync-to-docs-repo.sh    # 同步到文档仓库
└── package.json
```

### 2.2 文档仓库 (`aastar-docs`)

```
aastar-docs/
├── .vitepress/
│   ├── config.ts               # VitePress配置
│   ├── theme/                  # 自定义主题
│   └── components/             # Vue组件
├── public/                     # 静态资源
│   ├── logo.svg
│   └── images/
├── index.md                    # 首页
├── guide/                      # 从SDK repo同步
├── api/                        # 从SDK repo同步
├── examples/                   # 从SDK repo同步
└── package.json
```

---

## 3. 自动化工作流

### 3.1 API文档自动生成

使用 **TypeDoc** 或 **API Extractor** 从TypeScript源码提取API文档。

**脚本**: `scripts/generate-api-docs.ts`

```typescript
import { Application } from 'typedoc';

async function generateAPIDocs() {
  const app = new Application();
  
  app.options.addReader(new TypeDocReader());
  app.bootstrap({
    entryPoints: ['packages/*/src/index.ts'],
    out: 'docs/api',
    plugin: ['typedoc-plugin-markdown'],
  });

  const project = app.convert();
  await app.generateDocs(project, 'docs/api');
}
```

### 3.2 文档同步流程

文档同步使用 `scripts/extract-docs.sh` 腳本，手動調用命令為 `pnpm run docs:sync`。

**流程**:
1. 在 `aastar-sdk` 運行 `pnpm run docs:generate` 生成最新 API 文檔。
2. 運行 `pnpm run docs:sync` 將 `docs/` 文件夾內容同步到 `aastar-docs`。
3. 同步過程會保持相同的目錄結構 (`guide/`, `api/`, `examples/`)。

**Shell 腳本核心邏輯**:
\`\`\`bash
# 同步 Guide
cp -r "$SDK_REPO/docs/guide/"* "$DOCS_REPO/guide/"
# 同步 API
cp -r "$SDK_REPO/docs/api/"* "$DOCS_REPO/api/"
# 同步 Examples
cp -r "$SDK_REPO/docs/examples/"* "$DOCS_REPO/examples/"
\`\`\`



### 3.3 文档站点部署

Use docs repo shell to deploy.
---

## 4. 文档结构设计

### 4.1 首页 (index.md)

```markdown
# AAStar SDK

> Build Your Own Protocol (YOP) with Account Abstraction

## Features
- 🚀 Gasless Transactions (SuperPaymaster AOA+)
- 🌈 EOA Rainbow Bridge
- 🏛️ Community Management
- 🎯 Reputation System

## Quick Start
[Get Started →](/0.16.23/guide/getting-started)
```

### 4.2 指南结构

```
guide/
├── index.md                    # 指南概览
├── getting-started.md          # 快速开始
├── concepts/
│   ├── account-abstraction.md
│   ├── superpaymaster.md
│   └── reputation-system.md
├── use-cases/
│   ├── community-management.md
│   ├── gasless-transactions.md
│   ├── operator-staking.md
│   └── rainbow-bridge.md
└── advanced/
    ├── custom-paymaster.md
    └── multi-chain.md
```

### 4.3 API文档结构 (按角色组织)

```
api/
├── index.md                    # API概览
├── roles/
│   ├── operator.md             # Operator角色API
│   ├── community.md            # Community角色API
│   ├── enduser.md              # EndUser角色API
│   └── admin.md                # Admin角色API
├── modules/
│   ├── core.md                 # Core模块
│   ├── account.md              # Account模块
│   ├── paymaster.md            # Paymaster模块
│   ├── tokens.md               # Tokens模块
│   └── identity.md             # Identity模块
└── types/
    ├── common.md               # 通用类型
    └── errors.md               # 错误类型
```

---

## 5. API文档模板

### 5.1 模块文档模板

```markdown
# @aastar/core

Core configuration and client creation utilities.

## Installation

\`\`\`bash
pnpm add @aastar/core
\`\`\`

## Exports

- [Networks](#networks)
- [Contracts](#contracts)
- [Clients](#clients)
- [Constants](#constants)

---

## Networks

### getNetwork()

Get network configuration for a supported network.

**Signature:**
\`\`\`typescript
function getNetwork(network: SupportedNetwork): NetworkConfig
\`\`\`

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| network | `SupportedNetwork` | Network name ('sepolia' \| 'optimism' \| 'anvil') |

**Returns:**
| Type | Description |
|------|-------------|
| `NetworkConfig` | Network configuration object |

**Type Definitions:**
\`\`\`typescript
type SupportedNetwork = 'sepolia' | 'optimism' | 'optimism-sepolia' | 'anvil';

interface NetworkConfig {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}
\`\`\`

**Example:**
\`\`\`typescript
import { getNetwork } from '@aastar/core';

const network = getNetwork('sepolia');
console.log(network.chainId); // 11155111
console.log(network.rpcUrl);  // 'https://rpc.sepolia.org'
\`\`\`

**Errors:**
- Throws if network is not supported

**See Also:**
- [getTxUrl()](#gettxurl)
- [getChainId()](#getchainid)
```

### 5.2 角色文档模板

```markdown
# Operator API

API reference for Paymaster operators.

## Overview

Operators are responsible for:
- Staking GTokens
- Depositing to Paymaster
- Managing withdrawals
- Monitoring performance

## Client Creation

### createOperatorClient()

Create a client for Paymaster operators.

[详细文档...]

## Actions

### stake()

Stake GTokens to become an operator.

**Context:** Use this when you want to register as a Paymaster operator.

**Prerequisites:**
- Must have GTokens
- Must approve GTokenStaking contract

**Signature:**
\`\`\`typescript
stake(params: StakeParams): Promise<Hash>
\`\`\`

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| params.amount | `bigint` | Amount to stake (in wei) |

**Returns:**
| Type | Description |
|------|-------------|
| `Promise<Hash>` | Transaction hash |

**Example:**
\`\`\`typescript
import { createOperatorClient } from '@aastar/core';
import { parseEther } from 'viem';

const operator = createOperatorClient({...});

// Approve first
await operator.approveGToken({
  spender: CONTRACTS.sepolia.gTokenStaking,
  amount: parseEther('100'),
});

// Then stake
const txHash = await operator.stake({
  amount: parseEther('100'),
});
\`\`\`

**Errors:**
- `InsufficientBalance` - Not enough GTokens
- `InsufficientAllowance` - Need to approve first
- `MinimumStakeNotMet` - Amount below minimum

**Events Emitted:**
- `Staked(operator, amount)`

**See Also:**
- [deposit()](#deposit)
- [withdraw()](#withdraw)
```

---

## 6. 实施步骤

### Phase 1: 基础设施搭建 (1-2天)

- [ ] 创建`aastar-docs`仓库
- [ ] 安装VitePress并配置
- [ ] 设置GitHub Actions自动部署
- [ ] 配置自定义域名`docs.aastar.io`

### Phase 2: API文档生成 (2-3天)

- [ ] 安装TypeDoc和相关插件
- [ ] 编写`generate-api-docs.ts`脚本
- [ ] 为每个模块生成API文档
- [ ] 添加类型定义和错误说明

### Phase 3: 指南编写 (3-5天)

- [ ] 编写快速开始指南
- [ ] 编写核心概念文档
- [ ] 编写用例文档(社区管理、无Gas交易等)
- [ ] 编写高级主题文档

### Phase 4: 角色文档 (2-3天)

- [ ] 按角色组织API文档
- [ ] 为每个角色编写完整工作流
- [ ] 添加实际代码示例
- [ ] 添加最佳实践

### Phase 5: 自动化和优化 (1-2天)

- [ ] 设置自动同步workflow
- [ ] 添加文档搜索功能
- [ ] 优化移动端显示
- [ ] 添加代码playground (可选)

---

## 7. 维护流程

### 日常维护

1. **代码变更时**:
   - 开发者提交PR
   - CI自动运行`pnpm run docs:generate`
   - 检查API文档变更
   - 合并后自动同步到docs repo

2. **手动文档更新**:
   - 在SDK repo的`docs/`目录编辑
   - 提交后自动同步

3. **版本发布**:
   - 打tag时自动生成版本化文档
   - 保留历史版本文档

### 质量保证

- [ ] 文档链接检查
- [ ] 代码示例可运行性测试
- [ ] TypeScript类型检查
- [ ] Markdown格式检查

---

## 8. 工具和脚本

### package.json scripts

```json
{
  "scripts": {
    "docs:generate": "tsx scripts/generate-api-docs.ts",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs",
    "docs:sync": "bash scripts/sync-to-docs-repo.sh"
  }
}
```

---

## 9. 参考资源

- [VitePress官方文档](https://vitepress.dev)
- [TypeDoc文档](https://typedoc.org)
- [Viem文档](https://viem.sh) (参考其文档结构)
- [Ethers.js文档](https://docs.ethers.org) (参考其API组织方式)

---

## 11. 論文數據採集指南 (PhD Data collection)

詳細指南請參見: [paper-data-collection.md](file:///Users/jason/Dev/mycelium/my-exploration/projects/aastar-sdk/docs/paper-data-collection.md)

**核心要點**:
- 所有實驗必須使用 `aastar-sdk` 實作。
- 使用 `run_automated_experiment.sh` 進行自動化運行。
- 數據採集涵蓋: Gas Usage, Latency, Throughput (TPS), Cost (USD)。
