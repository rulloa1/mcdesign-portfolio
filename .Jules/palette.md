# Palette's Journal

## 2024-05-22 - Starting UX Improvements
**Learning:** Initial setup of the journal.
**Action:** Will document critical learnings here.

## 2026-01-17 - Semantic Links in Cards
**Learning:** Interactive cards implemented as `div`s with `onClick` handlers fail to support standard browser features (middle-click, hover URL status) and accessibility tools.
**Action:** Always prefer wrapping card content in an `<a>` tag or using a polymorphic component that renders an `<a>` when a URL is present.
