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
4. From `blueprint-political/`: `git add -A && git commit -m "chore: save project $(date +%Y-%m-%d)" && git push` — skip push if no remote configured.

---

## Model Selection

- Bulk/repetitive (batch writes, templates) → `claude-haiku-4-5-20251001`
- Default work (features, UI, hooks) → `claude-sonnet-4-6`
- High-stakes (security rules, auth logic, architecture) → `claude-opus-4-6`
