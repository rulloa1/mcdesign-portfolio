# Palette's Journal

## 2024-05-22 - Starting UX Improvements
**Learning:** Initial setup of the journal.
**Action:** Will document critical learnings here.

## 2025-01-16 - WorkCard Accessibility
**Learning:** The `WorkCard` component was using `div` with `onClick` to emulate a link, which is inaccessible to keyboard users and screen readers.
**Action:** Refactored `WorkCard` to polymorphically render an `<a>` tag when a URL is present. This pattern should be used for all interactive cards that navigate to a new URL.
