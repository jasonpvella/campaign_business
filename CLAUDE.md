# Campaign Business — Claude Code Instructions

## Terminal Commands

Never ask Jason to run commands manually. Use Bash directly:
- TypeScript: `npx tsc --noEmit`
- Builds: `npm run build`
- Firebase: `firebase deploy --only ...`
- Git: `git add`, `git commit`, `git push`

---

## Project Structure

App code lives in `blueprint-political/`. Run all frontend commands from that directory.

---

## Critical Rules

[Define as the project matures — add auth validation, data privacy, and write guards here.]

---

## Docs

| Doc | Contents |
|---|---|
| [docs/JOURNAL.md](docs/JOURNAL.md) | Session log, executive snapshot, decisions |

Read `docs/JOURNAL.md` at the start of any non-trivial session.

---

## Save Project

When Jason says "Save Project":
1. Scan the session for new decisions, scope changes, and requirement shifts.
2. Rewrite `## Executive Snapshot` in `docs/JOURNAL.md` — current focus + next session priorities.
3. Append a dated `### YYYY-MM-DD` entry to `## Historical Log` with the session delta (decisions, what changed, what's next).
4. From repo root: `git add -A && git commit -m "chore: save project $(date +%Y-%m-%d)" && git push`
5. From `blueprint-political/`: `npx vercel --prod` to deploy the latest to production.

---

## Delivery Standard

Before marking any task done:
1. Run `npx tsc --noEmit` — fix all errors before delivering.
2. State what changed, what depends on it, and how regressions were ruled out.

Scale to the change: shared hooks/contexts/layouts require explicit consumer audit. Isolated UI changes do not.

---

## Model Selection

- Bulk/repetitive (batch writes, templates) → `claude-haiku-4-5-20251001`
- Default work (features, UI, hooks) → `claude-sonnet-4-6`
- High-stakes (security rules, auth logic, architecture) → `claude-opus-4-6`
