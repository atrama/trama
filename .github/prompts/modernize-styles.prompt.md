---
description: 'Modernize CSS in Astro components to use CSS Grid, custom properties, and accessibility best practices'
argument-hint: '[component file or section]'
agent: 'agent'
---

# Modernize Astro Component Styles

Refactor the provided CSS to modern standards following these practices:

## Grid Layout

- Replace Flexbox with **CSS Grid** for page layouts and component structure
- Use semantic grid columns (e.g., `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`)
- Apply Grid's native alignment (`align-items`, `justify-items`) for cleaner layouts

## Fonts

- Do not repeat font-size or declare line-height on every element. Instead, set these on the `body` or a common wrapper to ensure consistency and reduce redundancy.
- Use relative units (`rem`, `vw`, etc.) for font sizes to improve scalability and accessibility.
- Instead of queries, use clamp for responsive typography: `font-size: clamp(1rem, 2vw, 1.5rem);` to allow fluid scaling between a minimum and maximum size.

## Responsive Design

- Prefer container queries for responsive adjustments instead of media queries when possible. CSS clamp is even better for font sizes and spacing.
- Use `minmax` and `auto-fit` in Grid for responsive column layouts without needing breakpoints.

## Design Tokens

- Extract hardcoded colors, spacing, and radii into **CSS custom properties** in `src/style/var.css`
- Use semantic token names: `--color-primary`, `--space-sm`, `--radius-md`
- Outside of `var.css`, do not apply RGB triplets for colors. Use `var(--color-bg)` not `rgb(var(--color-bg))` unless you need to adjust opacity
- Reference tokens in component styles using `var(--token-name)`
- Color tokens should never be named the color (e.g., `--color-blue`) but instead should be named for their purpose (e.g., `--color-primary`). This allows for easier theming with dark mode where blue may be the primary color in light mode but a different color in dark mode.

## Accessibility

- Keep browser default focus styles for interactive elements (anchors, buttons, form inputs).
- Ensure sufficient color contrast (WCAG AA minimum 4.5:1)
- Include `prefers-reduced-motion` media query for animations
- use `prefers-color-scheme` to adapt to light/dark modes. If there is not a dark mode, suggest one and use `prefers-color-scheme` and css-custom properties to implement it.

## Code Quality

- Remove commented-out code or legacy variables
- Consolidate duplicate selectors or rules
- Ensure component styles are scoped to avoid conflicts

## Miscellaneous

- Use modern CSS selectors like `:is()`, `:where()`, and `:has()` for cleaner and more efficient styles
- Never use `!important` but instead refactor specificity or structure instead. `@layer` and `@scope` can help manage specificity as can `@where`.
- Use `@supports` to conditionally apply styles based on feature support when necessary
- Use new CSS features and APIs where appropriate (e.g., `aspect-ratio`, `scroll-snap`, `subgrid`)
- Keep in mind that Astro components has scoped styles by default, scoping styles using `@scope` or `@layer` is not as necessary as in other frameworks.

## Example Transformation

### Selectors and Variables

**Before:**

```css
input,
textarea {
  color: #333;
}

.contact {
  padding: 2%;
  color: #222;
  background: #76a8b2;

  input,
  textarea {
    background: #222;
    color: #eee;
  }
}

.contact-form.has-alert .alert {
  border: 1px solid #f00;
}

.contact-form .alert,
.some-other-form .alert,
.another-form .alert {
  font-weight: bold;
}
```

**After:**

```css
@layer components, utilities;

input,
textarea {
  color: var(--color-text-accent-contrast);
}

@scope (.contact) to (.contact-form) {
  input,
  textarea {
    background: var(--color-bg);
    color: var(--color-text);
  }
}

:root {
  --space-2: 8px;
  --color-accent: 118 168 178; /* #76a8b2 */
  --color-text: 255 255 255;
}

.contact {
  padding: var(--space-2);
  color: var(--color-text);
  background: var(--color-accent);

  :has(.alert) {
    border: 1px solid var(--color-error);
  }
}

.is(.contact-form, .some-other-form, .another-form) .alert {
  font-weight: bold;
}
```

### Responsive Styles

**Before:**

```css
body {
  font-size: 16px;
  padding: 20px;
}

@media (min-width: 600px) {
  body {
    font-size: 18px;
    padding: 40px;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
}
```

**After:**

```css
body {
  font-size: clamp(16px, 2vw, 18px);
  padding: clamp(20px, 5vw, 40px);
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-2);
}
```

---

Provide the refactored CSS and explain key improvements made.
