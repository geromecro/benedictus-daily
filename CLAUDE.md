# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Benedictus Daily** is a spiritual companion PWA for a 64-day journey (Feb 1 - Apr 5, 2026) from Septuagesima to Easter Sunday. It tracks daily prayer commitments (Ora), work (Labora), spiritual readings (Lectio), and Lenten sacrifices, following Catholic/Benedictine traditions.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000) - uses webpack, not turbopack
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint

# Deploy to production
vercel --prod
```

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` syntax, NOT v3 @tailwind directives)
- **Database**: Supabase PostgreSQL (push subscriptions, notification schedules)
- **PWA**: @ducanh2912/next-pwa with custom Service Worker for push notifications
- **Web Push**: VAPID-based notifications via web-push library
- **Deployment**: Vercel

## Architecture

### Page Structure
```
app/
├── page.tsx                    # Home - daily checklist (Ora, Labora, Lectio)
├── lectura/page.tsx            # Daily spiritual reading
├── calendario/page.tsx         # 64-day liturgical calendar view
├── configuracion/page.tsx      # Settings, notification times, sacrifices
└── api/push/subscribe/route.ts # Web Push subscription API (POST/PUT/DELETE)
```

### Core Libraries (lib/)
- **storage.ts**: localStorage management for UserData and DailyProgress
- **calendar.ts**: Hardcoded 64-day liturgical calendar with feast names, seasons, fasting days
- **lecturas.ts**: Daily spiritual readings content (Lectura objects)
- **supabase.ts**: Supabase client initialization
- **push-notifications.ts**: VAPID key handling, device ID generation

### Supabase Backend
```
supabase/
├── migrations/
│   ├── 001_push_subscriptions.sql  # Device subscriptions table
│   ├── 002_cron_jobs.sql           # pg_cron for scheduled notifications
│   ├── 003_telegram_config.sql     # Telegram bot settings
│   └── 004_telegram_cron.sql       # Telegram notification cron
└── functions/
    ├── send-push/index.ts          # Edge function: Web Push delivery
    └── send-telegram/index.ts      # Edge function: Telegram messages
```

### Data Flow
1. **User progress**: Stored in localStorage (`benedictus_data` key)
2. **Push subscriptions**: Stored in Supabase `push_subscriptions` table
3. **Scheduled notifications**: pg_cron triggers Edge Functions at user-defined times
4. **Telegram**: Parallel notification channel for group reminders

## Key Patterns

### Client Components
Most pages use `"use client"` for interactivity with useState/useEffect.

### Storage Pattern
```typescript
// lib/storage.ts exports:
getUserData(): UserData
saveUserData(data: UserData): void
getDailyProgress(date: string): DailyProgress
saveDailyProgress(date: string, progress: DailyProgress): void
```

### Calendar Utilities
```typescript
// lib/calendar.ts exports:
getDiaActual(): number               // Current day number (1-64)
getDiaLiturgico(dia?: number)        // Get liturgical day info
getTiempoLiturgicoLabel(tiempo)      // Get display label for liturgical season
getTiempoLiturgicoBadgeClass(tiempo) // Get CSS class for season badge
estaDentroDeCuaresma(): boolean      // Check if current date is within Lent
esDiaDeAyuno(): boolean              // Check if today is a fasting day
esViernesDeCuaresma(): boolean       // Check if today is Friday of Lent (for Via Crucis)
```

## Styling

### Monastic Color Theme (CSS variables in globals.css)
- `--scriptorium`: #5C4033 (primary brown)
- `--parchment`: #F7F3EB (cream background)
- `--gold`: #B8860B (liturgical gold accents)
- `--ultramarine`: #1E3A5F (deep blue)
- `--lenten-purple`: #5B3A6E (penitential)
- `--holy-red`: #8B2942 (martyrs)

### Typography
- **Cinzel**: Display/titles
- **Cormorant Garamond**: Headings/labels
- **EB Garamond**: Body text

### Tailwind v4 Note
Use `@import "tailwindcss"` in globals.css, NOT `@tailwind base/components/utilities`.

## Environment Variables

See `.env.example` for full documentation. Required:

```bash
# VAPID (generate with: npx web-push generate-vapid-keys)
NEXT_PUBLIC_VAPID_PUBLIC_KEY=
VAPID_PRIVATE_KEY=
VAPID_SUBJECT=mailto:your@email.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Optional: Telegram notifications
TELEGRAM_BOT_TOKEN=
TELEGRAM_GROUP_CHAT_ID=
```

## PWA Configuration

- Configured in `next.config.ts` with @ducanh2912/next-pwa
- Uses webpack (turbopack disabled for PWA compatibility)
- Custom service worker at `public/custom-sw.js` handles push events
- App manifest at `public/manifest.json`

## The Four Pillars

The app follows a 4-pillar spiritual framework from the Benedictus program:

| Pillar | Name | Description | Active |
|--------|------|-------------|--------|
| ORA | Oración | Prayer commitments (Laudes, Completas, Rosario, etc.) | Always |
| LECTIO | Lectura | Daily spiritual reading from San Gregorio Magno's "Vida de San Benito" | Always |
| LABORA | Trabajo | Work discipline (punctuality, blessing meals, household tasks) | Always |
| REALITAS | Habitar la realidad | Digital detox and personal sacrifices | From Ash Wednesday (day 18) |

### Special Conditions
- **Via Crucis**: Only shown on Fridays during Lent (`esViernesDeCuaresma()`)
- **Sunday readings**: Marked as "lectura dominical extensa (45 minutos)" with gold banner
- **Fasting days**: Wednesday and Friday of Lent, with special alert on home page

## Readings Status

Daily readings are stored in `lib/lecturas.ts`:
- **Days 1-9**: Populated with "Vida de San Benito" excerpts
- **Days 10-64**: Pending content (55 days remaining)

## Language

All user-facing text is in **Spanish**. Spiritual terms follow Catholic liturgical vocabulary:
- Ora (Prayer), Labora (Work), Lectio (Reading), Realitas (Reality)
- Laudes, Completas, Vísperas (Divine Office hours)
- Cuaresma (Lent), Pascua (Easter)
