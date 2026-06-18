import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

// Helper: deep-clone a sidebar array and prefix every root-absolute `link`
// with the given version path (e.g. '/0.16.23'). Used to mirror the latest
// sidebars for the frozen archived version without hand-editing each entry.
function prefixSidebar(
  items: DefaultTheme.SidebarItem[],
  prefix: string
): DefaultTheme.SidebarItem[] {
  return items.map((item) => {
    const next: DefaultTheme.SidebarItem = { ...item }
    if (typeof next.link === 'string' && next.link.startsWith('/')) {
      next.link = prefix + next.link
    }
    if (Array.isArray(next.items)) {
      next.items = prefixSidebar(next.items, prefix)
    }
    return next
  })
}

// --- Latest (root) sidebars -------------------------------------------------

const guideSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Introduction',
    items: [
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Quick Start', link: '/guide/quick-start' }
    ]
  },
  {
    text: 'Core Concepts',
    items: [
      { text: 'Account Abstraction', link: '/guide/concepts/account-abstraction' },
      { text: 'SuperPaymaster (AOA+)', link: '/guide/concepts/superpaymaster' },
      { text: 'EOA Rainbow Bridge', link: '/guide/concepts/rainbow-bridge' },
      { text: 'Reputation System', link: '/guide/concepts/reputation' }
    ]
  },
  {
    text: 'Use Cases',
    items: [
      { text: 'Community Management', link: '/guide/use-cases/community-management' },
      { text: 'Gasless Transactions', link: '/guide/use-cases/gasless-transactions' },
      { text: 'Operator Staking', link: '/guide/use-cases/operator-staking' },
      { text: 'Build Your Own Protocol', link: '/guide/use-cases/yop' }
    ]
  },
  {
    text: 'Deployments',
    items: [
      { text: 'Overview (Optimism Default)', link: '/guide/deployments/' },
      { text: 'Optimism Contracts', link: '/guide/deployments/verify.optimism.contracts' },
      { text: 'OP-Sepolia Contracts', link: '/guide/deployments/verify.op-sepolia.contracts' },
      { text: 'Sepolia Contracts', link: '/guide/deployments/verify.sepolia.contracts' }
    ]
  },
  {
    text: 'Operations',
    items: [
      { text: 'Configuration Sync', link: '/guide/docs/Configuration_Sync' },
      { text: 'Gasless Tester Guide', link: '/guide/docs/TESTER_GUIDE_GASLESS' },
      { text: 'Account Initialization (CN)', link: '/guide/docs/Account_Initialization_Guide_CN' },
      { text: 'Stage3 Analysis', link: '/guide/docs/SDK_STAGE3_ANALYSIS' }
    ]
  },
  {
    text: 'Lifecycle API (L3)',
    items: [
      { text: 'Developer Guide', link: '/guide/docs/L3_Lifecycle_Developer_Guide' },
      { text: 'Use Case Analysis', link: '/guide/docs/L3_Use_Case_Analysis' },
      { text: 'Patterns Design', link: '/guide/docs/L3_Lifecycle_Patterns_Design' }
    ]
  }
]

const zhGuideSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '快速入门',
    items: [
      { text: '开始使用', link: '/zh/guide/getting-started' },
      { text: '安裝', link: '/zh/guide/installation' },
      { text: '快速開始', link: '/zh/guide/quick-start' }
    ]
  },
  {
    text: '核心概念',
    items: [
      { text: '賬戶抽象', link: '/zh/guide/concepts/account-abstraction' },
      { text: 'SuperPaymaster (AOA+)', link: '/zh/guide/concepts/superpaymaster' },
      { text: 'EOA Rainbow Bridge', link: '/zh/guide/concepts/rainbow-bridge' },
      { text: '聲譽系統', link: '/zh/guide/concepts/reputation' }
    ]
  },
  {
    text: '应用场景',
    items: [
      { text: '社区管理', link: '/zh/guide/use-cases/community-management' },
      { text: 'Gasless 交易', link: '/zh/guide/use-cases/gasless-transactions' },
      { text: 'Operator 質押', link: '/zh/guide/use-cases/operator-staking' },
      { text: '自建協議', link: '/zh/guide/use-cases/yop' }
    ]
  }
]

const apiSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Overview', link: '/api/' },
      { text: 'Installation', link: '/api/@aastar/sdk#installation' },
      { text: 'Quick Start', link: '/api/@aastar/sdk#usage' }
    ]
  },
  {
    text: '@aastar/sdk (Meta Package)',
    items: [
      { text: 'Overview', link: '/api/@aastar/sdk' },
      { text: 'Node.js Tools', link: '/api/@aastar/sdk/node' }
    ]
  },
  {
    text: 'Core Modules',
    collapsed: false,
    items: [
      { text: '@aastar/core', link: '/api/@aastar/core' },
      { text: '@aastar/account', link: '/api/@aastar/account' },
      { text: '@aastar/paymaster', link: '/api/@aastar/paymaster' },
      { text: '@aastar/enduser', link: '/api/@aastar/enduser' },
      { text: '@aastar/operator', link: '/api/@aastar/operator' },
      { text: '@aastar/admin', link: '/api/@aastar/admin' },
      { text: '@aastar/dapp', link: '/api/@aastar/dapp' },
      { text: '@aastar/tokens', link: '/api/@aastar/tokens' },
      { text: '@aastar/identity', link: '/api/@aastar/identity' },
      { text: '@aastar/airaccount', link: '/api/@aastar/airaccount' },
      { text: '@aastar/channel', link: '/api/@aastar/channel' },
      { text: '@aastar/x402', link: '/api/@aastar/x402' }
    ]
  },
  {
    text: 'Examples',
    items: [
      { text: 'SDK Handbooks', link: '/api/@aastar/sdk#core-scenarios' }
    ]
  }
]

// Frozen API sidebar for the archived v0.16.23 snapshot. v0.16.23 predates the
// single-package consolidation, so it still exposes @aastar/community and
// @aastar/analytics and lacks admin/airaccount/channel/x402. Kept separate so
// updating the latest apiSidebar above never rewrites the frozen archive.
const apiSidebarArchived: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Overview', link: '/api/' },
      { text: 'Installation', link: '/api/@aastar/sdk#installation' },
      { text: 'Quick Start', link: '/api/@aastar/sdk#usage' }
    ]
  },
  {
    text: '@aastar/sdk (Meta Package)',
    items: [
      { text: 'Overview', link: '/api/@aastar/sdk' },
      { text: 'Node.js Tools', link: '/api/@aastar/sdk/node' }
    ]
  },
  {
    text: 'Core Modules',
    collapsed: false,
    items: [
      { text: '@aastar/community', link: '/api/@aastar/community' },
      { text: '@aastar/operator', link: '/api/@aastar/operator' },
      { text: '@aastar/enduser', link: '/api/@aastar/enduser' },
      { text: '@aastar/core', link: '/api/@aastar/core' },
      { text: '@aastar/account', link: '/api/@aastar/account' },
      { text: '@aastar/paymaster', link: '/api/@aastar/paymaster' },
      { text: '@aastar/tokens', link: '/api/@aastar/tokens' },
      { text: '@aastar/identity', link: '/api/@aastar/identity' },
      { text: '@aastar/analytics', link: '/api/@aastar/analytics' },
      { text: '@aastar/dapp', link: '/api/@aastar/dapp' }
    ]
  },
  {
    text: 'Examples',
    items: [
      { text: 'SDK Handbooks', link: '/api/@aastar/sdk#core-scenarios' }
    ]
  }
]

const examplesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Complete Examples',
    items: [
      { text: 'Overview', link: '/examples/' },
      { text: 'Operator Flow', link: '/examples/operator-flow' },
      { text: 'Community Flow', link: '/examples/community-flow' },
      { text: 'End User Flow', link: '/examples/enduser-flow' },
      { text: 'L3 Lifecycle Developer Guide', link: '/guide/docs/L3_Lifecycle_Developer_Guide' },
      { text: 'Multi-Chain Setup', link: '/examples/multi-chain' }
    ]
  }
]

const ARCHIVED_VERSION = '/0.16.23'

export default defineConfig({
  title: 'AAStar SDK',
  description: 'Build Your Own Protocol with Account Abstraction',

  lang: 'en',
  ignoreDeadLinks: true,
  lastUpdated: true,
  vite: {
    plugins: [
      {
        name: 'aastar-docs-rewrite-docs-prefix',
        configureServer(server) {
          server.middlewares.use((req: any, res: any, next: any) => {
            const url: string | undefined = req.url
            if (!url) return next()

            const [path, query] = url.split('?')
            if (path === '/docs' || path === '/docs/' || path.startsWith('/docs/')) {
              const redirectedPath = path === '/docs' || path === '/docs/' ? '/' : path.slice('/docs'.length) || '/'
              const location = query ? `${redirectedPath}?${query}` : redirectedPath
              res.statusCode = 302
              res.setHeader('Location', location)
              res.end()
              return
            }
            next()
          })
        },
        configurePreviewServer(server) {
          server.middlewares.use((req: any, res: any, next: any) => {
            const url: string | undefined = req.url
            if (!url) return next()

            const [path, query] = url.split('?')
            if (path === '/docs' || path === '/docs/' || path.startsWith('/docs/')) {
              const redirectedPath = path === '/docs' || path === '/docs/' ? '/' : path.slice('/docs'.length) || '/'
              const location = query ? `${redirectedPath}?${query}` : redirectedPath
              res.statusCode = 302
              res.setHeader('Location', location)
              res.end()
              return
            }
            next()
          })
        }
      }
    ]
  },

  themeConfig: {
    logo: '/aastar-logo.png',
    lastUpdatedText: 'Last Updated',

    // Enable right sidebar (TOC)
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Deployments', link: '/guide/deployments/' },
      { text: 'History', link: '/changelog' },
      {
        text: 'v0.20.8 (latest)',
        items: [
          { text: 'v0.20.8 (latest)', link: '/' },
          { text: 'v0.16.23', link: '/0.16.23/' }
        ]
      }
    ],

    sidebar: {
      '/guide/': guideSidebar,
      '/zh/guide/': zhGuideSidebar,
      '/api/': apiSidebar,
      '/examples/': examplesSidebar,

      // Mirrored sidebars for the frozen archived version (v0.16.23).
      // Links are auto-prefixed with the version path via prefixSidebar().
      '/0.16.23/guide/': prefixSidebar(guideSidebar, ARCHIVED_VERSION),
      '/0.16.23/api/': prefixSidebar(apiSidebarArchived, ARCHIVED_VERSION),
      '/0.16.23/examples/': prefixSidebar(examplesSidebar, ARCHIVED_VERSION),
      '/0.16.23/zh/guide/': prefixSidebar(zhGuideSidebar, ARCHIVED_VERSION)
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AAStarCommunity/aastar-sdk' },
      { icon: 'discord', link: 'https://discord.gg/aastar' }
    ],

    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2023-present AAStar Community'
    },

    search: {
      provider: 'local'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'AAStar SDK' }],
    ['meta', { name: 'og:image', content: 'https://docs.aastar.io/og-image.png' }]
  ]
})
