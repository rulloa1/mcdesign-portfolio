## 2024-05-22 - [Refactoring Generic Components for A11y]
**Learning:** Reusable components like `Button` often block accessibility props (like `aria-label`) if they are too restrictive with props destructuring.
**Action:** Always ensure generic wrapper components use `...rest` or `...otherProps` to pass down attributes to the underlying semantic HTML element.
