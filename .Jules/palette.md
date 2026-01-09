## 2025-05-24 - Accessibility of Interactive Cards
**Learning:** The `WorkCard` component was implemented as a `div` with an `onClick` handler, rendering it inaccessible to keyboard users and screen readers.
**Action:** Always use semantic elements like `<button>` or `<a>` for interactive components. If a complex layout (like a card) needs to be clickable, wrap the entire content in the semantic element or use the "stretched link" technique.
