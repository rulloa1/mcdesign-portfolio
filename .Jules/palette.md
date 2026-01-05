## 2026-01-05 - Button Accessibility and Linting
**Learning:** The project uses a custom `Button` component that was missing critical accessibility props like `aria-label` and `disabled`. It also hardcoded `type="button"`, preventing use in forms.
**Action:** Always check basic UI components for standard HTML attribute support (aria-*, disabled, type) and ensure they are passed down to the DOM element. Also, be mindful of strict ESLint rules for unescaped entities in JSX.
