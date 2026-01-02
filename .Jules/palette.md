## 2024-05-24 - Button Component Accessibility
**Learning:** The custom `Button` component did not originally spread props to the underlying HTML button, which prevented the addition of `aria-label` or other accessibility attributes. This is a common pattern in older or simpler React components that blocks accessibility improvements.
**Action:** Always ensure wrapper components spread `...otherProps` or explicitly pass through accessibility-related props to the semantic HTML element.
