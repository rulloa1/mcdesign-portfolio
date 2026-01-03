## 2024-05-23 - Custom Button Prop Spreading
**Learning:** Custom Button components often swallow accessibility props if they don't spread `...rest`. Always check generic UI components for prop spreading.
**Action:** When auditing a component library, start with the lowest-level primitives (Button, Input) to ensure they pass down props like `aria-label` and `disabled`.
