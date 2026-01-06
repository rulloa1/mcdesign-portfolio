## 2024-05-22 - Semantic Links
**Learning:** Using `<button onClick={() => window.open(...)}>` for links is a common anti-pattern that hurts accessibility and UX (no right-click, no middle-click).
**Action:** Always prefer semantic `<a>` tags. Polymorphic components (like `Button` that can render as `<a>` if `href` is present) are a great pattern to maintain consistent styling while ensuring correct semantics.
