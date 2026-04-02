# ReputationOS

Internal digital reputation cleanup management system.

## Setup

1. Copy `.env.example` to `.env` and fill in API keys
2. Install dependencies: `pnpm install`
3. Build packages: `pnpm build`
4. Set up database: `pnpm --filter @reputation-os/database db:push`
5. Start dev servers: `pnpm dev`

## Architecture

- **Frontend**: Next.js with TailwindCSS
- **Backend**: NestJS API
- **Database**: PostgreSQL with Prisma
- **AI Engine**: Modular provider system with fallback

## Development

- `pnpm dev` - Start all services
- `pnpm build` - Build all packages
- `pnpm lint` - Lint code