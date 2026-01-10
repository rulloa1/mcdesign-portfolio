## 2026-01-10 - Semantic Cards
**Learning:** Large clickable "cards" are often implemented as `div`s with `onClick`, harming accessibility and native browser features (middle-click, status bar URL).
**Action:** Refactor such components to be polymorphic, rendering as `<a>` tags when a URL is present. This restores native link behavior and accessibility without changing the visual design.
