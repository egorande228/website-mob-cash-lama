# Codex GitHub Workflow (Mandatory)

## Core rule
All website changes must be made only inside the local clone of:
`https://github.com/egorande228/website-mob-cash-lama.git`

Working root:
`/Users/egorande/Documents/New project`

## Before any work
1. Open the repo root.
2. Check branch/status:
   - `git status -sb`
   - `git remote -v`
3. Ensure changes are made only in this repo root and tracked files.

## During work
1. Edit files only inside this repository.
2. Commit in small logical steps.
3. Push after each completed task:
   - `git push origin main`

## Strict constraints
1. Do not work from random local folders outside this repo.
2. Do not keep a second "working copy" outside this repo.
3. Source of truth is GitHub + this clone only.

## Recovery / sync checklist
1. `git fetch origin`
2. `git status -sb`
3. If needed: `git pull --rebase origin main`
4. Continue edits.

## Cross-chat continuity
If another chat/session opens this same repo path and branch, work can continue normally with full continuity after `git status` check.

## Current project snapshot (updated)
- Branch: `main`
- Sync target: `origin/main`
- Pages:
  - `index.html` (main landing)
  - `agent.html` (Be our Agent)
  - `partner.html` (Be our Partner)
- Language system:
  - ES / PT / EN switcher in topbar
  - Translations handled in `js/main.js`
  - Language choice stored in `localStorage` (`site_lang`)
- Recent UX/content updates:
  - Deposit commission updated to `8%`
  - Calculator formula updated to `8%`
  - Header contact pills (`Telegram` / `WhatsApp`)
  - Hero quick-contact mini-block under CTA
  - `Agent Academy` section removed from main page
  - Partner growth chart enhanced with explanatory labels/axis/value points
  - Agent `%` animation softened and reduced in intensity

## Hosting note
- Vercel was used only for temporary preview.
- Preferred long-term path discussed: domain + GitHub Pages.
