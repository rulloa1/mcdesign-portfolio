# Palette's Journal

## 2024-05-22 - Starting UX Improvements
**Learning:** Initial setup of the journal.
**Action:** Will document critical learnings here.

## 2024-05-22 - Polymorphic Component Accessibility
**Learning:** The `WorkCard` component was previously implemented as a clickable `div` (`onClick`) which excluded keyboard users and screen readers from accessing project links.
**Action:** Refactored `WorkCard` to be polymorphic. It now renders a semantic `<a>` tag when a URL is provided, ensuring proper focus states, keyboard navigation, and screen reader support, while maintaining backward compatibility for `onClick` behavior. Future cards should follow this `href` vs `onClick` polymorphic pattern.
