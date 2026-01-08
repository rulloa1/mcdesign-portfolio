## 2024-05-22 - Header Accessibility Patterns
**Learning:** Interactive elements like logos and icon-only buttons often get overlooked for keyboard accessibility (tab index, key handlers) and descriptive ARIA labels.
**Action:** Always verify that 'clickable' elements are either semantic buttons/links or have appropriate roles, tabIndex, and key handlers. Ensure icon-only buttons have action-oriented aria-labels, not just descriptive alt text.
