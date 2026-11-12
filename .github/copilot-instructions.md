# Project Guidelines

## Stack and Structure

- This is an Astro site. Pages live in `src/pages/`, reusable components in `src/components/`, and shared assets in `src/`.
- Keep component-specific styles in the component's `<style>` block. Astro scopes these styles by default; use `<style is:global>` only for site-wide rules.
- Use the existing Astro and React patterns in the relevant files rather than introducing another framework or styling system.

## Styling

- Reuse the CSS custom properties defined in `src/style/var.css` for colors, spacing, and typography.
- Keep light and dark palette values in `src/style/var.css`; use semantic custom properties with `light-dark()` and preserve `color-scheme: light dark` for system-preference theming.
- Keep foreground and background roles distinct when the same brand color is used in both contexts, and verify actual text/background pairings meet WCAG AA contrast in both schemes (4.5:1 for normal text, 3:1 for large text).
- Prefer logical properties such as `padding-inline`, `margin-inline`, and their block-axis equivalents when spacing should adapt to writing direction. Preserve physical properties when a specific physical side is intended.
- Choose Grid, Flexbox, media queries, or container queries based on the layout and what it needs to respond to; do not replace one with another by default.
- Preserve visible keyboard focus and reduced-motion accommodations when changing interactive elements or animations.
- Follow the formatting of the surrounding file when editing; existing files may use different indentation styles.

## Build and Validation

- Use pnpm, matching the repository lockfile.
- Run `pnpm build` to check and build the site after code changes. There is no test script currently defined in `package.json`.
