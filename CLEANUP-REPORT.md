# Redundancy Cleanup Report

**Date:** 2026-03-15  
**Project:** NB Advocacy v3 (`/home/nosyt/nb-advocacy-v3/`)  
**Total Lines Before:** 4,586 | **After:** 4,461 | **Saved:** ~125 lines + 1 file

---

## 1. Files Deleted

| File | Lines | Reason |
|------|-------|--------|
| `components/ImageWithCaption.tsx` | 42 | **Zero imports** — completely unused component |

## 2. Unused Dependencies Removed

| Package | Reason |
|---------|--------|
| `recharts` | Not imported in any source file (only appeared in build output). Ran `npm uninstall recharts`. |

**Kept:** `framer-motion` — used in `app/page.tsx` for animations.

## 3. Unused Imports Removed

### `app/economy/page.tsx`
- Removed: `Quote`, `Building`, `DollarSign`, `Landmark`, `Zap` from `lucide-react`
- These icons were imported but never rendered as components (only appeared in text/strings)

### `app/corruption/page.tsx`
- Removed: `Gavel` from `lucide-react`
- Imported but never used as a component

### `app/environment/page.tsx`
- Removed: `Droplets`, `Waves` from `lucide-react`
- Removed: `CaseStudy` from `@/components/CaseStudy`

### `app/intimidation/page.tsx`
- Removed: `AlertTriangle`, `FileWarning`, `ShieldOff` from `lucide-react`
- Removed: `CaseStudy` from `@/components/CaseStudy`

### `components/Timeline.tsx`
- Removed unused `ReactNode` import from `react`

## 4. Unused CSS Removed (`app/globals.css`)

### Custom Classes (zero usage across entire codebase)
- `.intel-border`
- `.intel-heading`
- `.hero-badge`
- `.stat-item`
- `.stat-val`
- `.stat-label`

### CSS Variable
- `--crisis-blue: #1e3a5f` — defined but never referenced in any component

**Lines removed from globals.css:** 93 → 66 (27 lines saved)

## 5. Duplicate Content Found (Noted, Not Changed)

Multiple pages share near-identical data snippets that could be extracted to shared constants:

| Content | Pages |
|---------|-------|
| NB Power emissions stats (4M barrels, $254M oil, 60% increase) | `economy`, `environment`, `sources` |
| Child poverty stats (21.9%, 41.2% Campbellton, 32,140 children) | `economy`, `sources`, `about` |
| Travel nurse scandal ($173.9M, $300.72/hr) | `healthcare`, `corruption`, `sources` |
| NB Power quote ("not a failure, it is the system") | `economy`, `environment` |

**Recommendation:** Create `lib/shared-data.ts` with exported constants to DRY these up in a future refactor.

## 6. Component Pattern Inconsistencies (Noted)

- `environment/page.tsx` and `intimidation/page.tsx` manually construct page headers with inline JSX instead of using the existing `PageHeader` component that all other pages use
- Both pages are marked `'use client'` but use no client-side features (no hooks, no event handlers) — could be server components for better performance

## Summary

| Metric | Value |
|--------|-------|
| Files deleted | 1 (`ImageWithCaption.tsx`) |
| Unused dependencies removed | 1 (`recharts`) |
| Unused imports removed | 12 across 5 files |
| Unused CSS removed | 6 custom classes + 1 CSS variable (27 lines) |
| Total lines removed | ~125 |
| TypeScript compilation | ✅ Passes with zero errors |
| Build | ✅ Success |
