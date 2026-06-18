# AAStar Documentation

Official documentation site for AAStar SDK.
Auto generated from aastar-sdk repo.

**Live Site**: https://docs.aastar.io

## 🚀 Quick Deploy

```bash
# Deploy to preview
./deploy.sh

# Deploy to production
./deploy.sh --prod
```

## 📝 Local Development

```bash
# Restore package.json for local dev
cp package.json.backup package.json
cp package-lock.json.backup package-lock.json

# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build
npm run docs:build
```

## 📦 Deployment Architecture

- **Build**: Local (npm run docs:build)
- **Deploy**: Vercel CLI (vercel --prod)
- **Output**: .vitepress/dist/
- **No online build** - Pure static file deployment

## 📂 Structure

```
.
├── .vitepress/
│   ├── config.ts       # VitePress config
│   └── dist/           # Built files (gitignored, deploy only)
├── api/                # API documentation
├── guide/              # User guides
├── examples/           # Code examples
├── public/             # Static assets
├── deploy.sh           # Deployment script
└── package.json.backup # For local dev only
```

## 🔄 Update Workflow

1. Edit markdown files
2. Run `./deploy.sh --prod`
3. Done!

## 📄 License

Apache-2.0 © AAStar Community
