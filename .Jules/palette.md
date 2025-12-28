## 2024-05-23 - Accessibility of Icon-only Buttons
**Learning:** Icon-only buttons (like theme toggles and mobile menus) often lack accessible names, making them unusable for screen readers. Modifying the base `Button` component to accept standard HTML attributes (like `aria-label`) allows for easy fixes without redesigning the component.
**Action:** When creating or using generic UI components, always ensure they support passing down standard accessibility attributes (`aria-*`, `role`, etc.).
