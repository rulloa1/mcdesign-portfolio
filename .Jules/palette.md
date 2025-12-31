## 2024-05-23 - Accessibility in Generic Components
**Learning:** Generic UI components like `Button` often need to pass through all props (spread) to the underlying DOM element to support accessibility attributes like `aria-label` or `disabled` states properly.
**Action:** Always include `{...props}` or `{...otherProps}` when creating wrapper components for native HTML elements.