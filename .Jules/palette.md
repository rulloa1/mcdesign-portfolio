## 2024-05-22 - Semantic Links
**Learning:** Button components were being used for navigation with `onClick` and `window.open`, which is bad for accessibility and SEO.
**Action:** Refactored `Button` component to be polymorphic (render `<a>` if `href` is present) and updated usages to use semantic HTML.
