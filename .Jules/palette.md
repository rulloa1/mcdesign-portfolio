# Palette's Journal

## 2024-05-22 - Starting UX Improvements
**Learning:** Initial setup of the journal.
**Action:** Will document critical learnings here.

## 2025-01-28 - Semantic Links in Cards
**Learning:** `onClick` handlers on `div`s for navigation destroy accessibility (no keyboard support, no screen reader link announcement) and standard browser features (middle-click, status bar preview).
**Action:** Always use polymorphic components (rendering `<a>` when `href` is present) for card-based navigation.

## 2025-01-28 - Dependency Consistency
**Learning:** Legacy projects may have inconsistent `package.json` and `lockfile` states. "Micro-UX" changes must avoid accidentally upgrading the entire framework.
**Action:** Verify lockfile consistency before installing dependencies in legacy repos.
