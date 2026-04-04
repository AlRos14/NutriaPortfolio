---
name: tailwindcss
displayName: Tailwind CSS
description: Tailwind CSS v4 utility-first styling patterns including responsive design, dark mode, container queries, and CSS-first configuration. Use when styling with Tailwind, adding utility classes, configuring themes, setting up dark mode, or customizing design tokens.
version: 2.0.0
---

# Tailwind CSS v4 Development Guidelines

Best practices for using Tailwind CSS v4 utility classes effectively.

Tailwind CSS v4 (released January 2025) uses a **CSS-first configuration** approach. All customization happens in CSS via `@theme`, not in JavaScript config files.

## Core Principles

1. **Utility-First**: Use utility classes instead of custom CSS
2. **Mobile-First**: Design for mobile, then scale up with responsive modifiers
3. **Theme-Driven**: Define colors, fonts, spacing in `@theme` — reference them everywhere
4. **Component Extraction**: Extract repeated patterns into framework components
5. **Accessible by Default**: Always include focus indicators, ARIA attributes, and sufficient contrast

## Installation

### Vite Plugin (Recommended)

```bash
npm install tailwindcss @tailwindcss/vite
```

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

### PostCSS Plugin (Alternative)

```bash
npm install tailwindcss @tailwindcss/postcss
```

```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### CSS Entry Point

```css
/* main.css — single line to import Tailwind */
@import 'tailwindcss';
```

No `content` array, no purge config — v4 detects template files automatically.

## CSS-First Configuration

### @theme — Design Tokens

Define your project's design tokens directly in CSS. Every `@theme` variable generates corresponding utility classes.

```css
@import 'tailwindcss';

@theme {
  /* Brand colors → generates bg-primary-500, text-primary-600, etc. */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;

  /* Surface colors → bg-surface-0, bg-surface-100, etc. */
  --color-surface-0: #ffffff;
  --color-surface-50: #f8fafc;
  --color-surface-100: #f1f5f9;
  --color-surface-800: #1e293b;
  --color-surface-900: #0f172a;

  /* Semantic colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;

  /* Fonts */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-heading: 'Poppins', sans-serif;

  /* Custom spacing */
  --spacing-128: 32rem;

  /* Custom breakpoints */
  --breakpoint-3xl: 120rem;
}
```

### Theme Variable Namespaces

| Namespace          | Generates                | Example                         |
| ------------------ | ------------------------ | ------------------------------- |
| `--color-*`        | Color utilities          | `bg-primary-500`, `text-danger` |
| `--font-*`         | Font family utilities    | `font-sans`, `font-heading`     |
| `--text-*`         | Font size utilities      | `text-xl`                       |
| `--font-weight-*`  | Font weight utilities    | `font-bold`                     |
| `--tracking-*`     | Letter spacing           | `tracking-wide`                 |
| `--leading-*`      | Line height              | `leading-tight`                 |
| `--breakpoint-*`   | Responsive variants      | `sm:*`, `3xl:*`                 |
| `--container-*`    | Container query variants | `@sm:*`, `@md:*`                |
| `--spacing-*`      | Spacing/sizing           | `px-4`, `w-128`                 |
| `--radius-*`       | Border radius            | `rounded-sm`                    |
| `--shadow-*`       | Box shadow               | `shadow-md`                     |
| `--inset-shadow-*` | Inset box shadow         | `inset-shadow-xs`               |
| `--drop-shadow-*`  | Drop shadow filter       | `drop-shadow-md`                |
| `--blur-*`         | Blur filter              | `blur-md`                       |
| `--perspective-*`  | Perspective              | `perspective-near`              |
| `--ease-*`         | Timing functions         | `ease-out`                      |
| `--animate-*`      | Animations               | `animate-spin`                  |

### @source — Explicit Content Sources

When automatic detection misses files (e.g., component libraries in node_modules):

```css
@import 'tailwindcss';
@source "../node_modules/@my-company/ui-lib";
```

### @plugin — Loading Plugins

Plugins are loaded via CSS, not JavaScript config:

```css
@import 'tailwindcss';
@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/typography";
```

**Built-in in v4 (no plugin needed):**

- `aspect-*` utilities (was `@tailwindcss/aspect-ratio`)
- Container queries (was `@tailwindcss/container-queries`)

## Utility Patterns

### Layout

```html
<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">
  <div class="flex-1">Content</div>
  <div class="shrink-0">Sidebar</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Dynamic grid (v4: any number works without config) -->
<div class="grid grid-cols-15 gap-2">
  <!-- 15 columns, no config needed -->
</div>

<!-- Positioning -->
<div class="relative">
  <div class="absolute top-0 right-0">Badge</div>
</div>
```

> **Note**: Use `shrink-0` (not `flex-shrink-0`). The `flex-` prefix forms are v3 legacy.

### Spacing

Use `gap` for spacing between flex/grid children (preferred over `space-y`/`space-x`):

```html
<!-- Preferred: gap works with flex, grid, and handles dynamic layouts -->
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Padding and margin -->
<div class="p-4 m-2">
  <!-- padding: 1rem, margin: 0.5rem -->
  <div class="px-6 py-4">
    <!-- padding-x: 1.5rem, padding-y: 1rem -->
    <div class="mt-8 mb-4"><!-- margin-top: 2rem, margin-bottom: 1rem --></div>
  </div>
</div>
```

> **v4**: Spacing utilities accept any value dynamically. `w-17`, `pr-29`, `mt-13` all work without config.

### Typography

Use your theme tokens for colors — avoid hardcoding:

```html
<h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">Heading</h1>
<p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
  Paragraph text with comfortable line height.
</p>
<span class="text-sm font-medium text-primary-600">Label using theme color</span>
```

### Colors

Always reference your `@theme` tokens. The default palette (gray, red, blue, etc.) is available, but prefer your own semantic tokens for brand consistency:

```html
<!-- Use your theme tokens for brand elements -->
<button class="bg-primary-600 hover:bg-primary-700 text-white">Action</button>
<div class="bg-surface-0 dark:bg-surface-900">Container</div>
<span class="text-danger">Error message</span>
<span class="text-success">Success</span>

<!-- Default palette is still available for non-brand use -->
<div class="border border-gray-200 dark:border-gray-700">Neutral border</div>
```

## Responsive Design

### Breakpoints (Mobile-First)

```html
<!-- Unprefixed = mobile, then override upward -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on md, third on lg -->
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- Responsive grid -->
</div>
```

Default breakpoints: `sm` (40rem), `md` (48rem), `lg` (64rem), `xl` (80rem), `2xl` (96rem).

### max-\* Variants

Target below a breakpoint or a specific range:

```html
<div class="max-md:hidden">Hidden on mobile, visible on md+</div>
<div class="md:max-xl:flex">Flex only between md and xl</div>
```

### Container Queries (Built-in in v4)

Style elements based on their container size, not viewport:

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row @lg:grid @lg:grid-cols-3">
    <!-- Layout adapts to container, not viewport -->
  </div>
</div>

<!-- Named containers for nested scenarios -->
<div class="@container/sidebar">
  <div class="@sm/sidebar:hidden">Hide in small sidebar</div>
</div>

<!-- Max-width container queries -->
<div class="@container">
  <div class="grid grid-cols-3 @max-md:grid-cols-1">
    <!-- Stack on small containers -->
  </div>
</div>
```

## State Variants

### Hover, Focus, Active

```html
<button
  class="bg-primary-600 hover:bg-primary-700 active:bg-primary-800
               focus:outline-2 focus:outline-primary-500 focus:outline-offset-2
               transition-colors"
>
  Interactive Button
</button>

<a href="#" class="text-primary-600 hover:text-primary-800 hover:underline"> Link </a>
```

> **Accessible focus pattern**: Use `focus:outline-2 focus:outline-offset-2 focus:outline-{color}` instead of `focus:ring-*`. This produces a visible, high-contrast focus indicator that meets WCAG 2.4.7.

### in-\* Variant (Implicit Groups)

Style based on parent state without needing a `group` class:

```html
<!-- v4: in-* replaces group-* for many cases -->
<a href="#" class="rounded-lg p-4">
  <img class="in-hover:opacity-75 transition-opacity" src="/photo.jpg" />
  <span class="in-hover:underline">Hover the parent link</span>
</a>

<!-- group-* still works for explicit grouping -->
<div class="group">
  <img class="group-hover:opacity-75 transition-opacity" src="/photo.jpg" />
  <p class="group-hover:text-primary-600">Hover the container</p>
</div>
```

### not-\* Variant

Style when a condition does NOT match:

```html
<div class="not-hover:opacity-75">Full opacity only on hover</div>
<div class="not-supports-hanging-punctuation:px-4">Fallback padding</div>
```

### Disabled and Inert

```html
<!-- Accessible disabled pattern -->
<button
  class="disabled:opacity-50 disabled:pointer-events-none"
  disabled
  aria-disabled="true"
>
  Disabled Button
</button>

<!-- Inert (v4 new variant) -->
<div class="inert:opacity-50 inert:pointer-events-none" inert>
  Non-interactive section
</div>
```

## Dark Mode

### Default: prefers-color-scheme

Works automatically — the `dark:` variant triggers when the OS/browser is in dark mode:

```html
<div class="bg-surface-0 dark:bg-surface-900 text-gray-900 dark:text-gray-100">
  <h1 class="text-gray-900 dark:text-white">Title</h1>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

### Class-Based Dark Mode

To toggle dark mode via a CSS class instead of OS preference:

```css
/* In your main CSS file */
@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));
```

```html
<html class="dark">
  <body class="bg-surface-0 dark:bg-surface-900">
    <!-- dark: utilities now respond to .dark class -->
  </body>
</html>
```

### Data-Attribute Based Dark Mode

```css
@import 'tailwindcss';
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

```html
<html data-theme="dark">
  <!-- ... -->
</html>
```

## Component Patterns

These patterns are **structural templates** — replace colors with your project's `@theme` tokens.

### Button

```html
<!-- Primary action — adapt colors to your @theme -->
<button
  class="px-4 py-2 bg-primary-600 text-white font-medium rounded-md
               hover:bg-primary-700 active:bg-primary-800
               focus:outline-2 focus:outline-primary-500 focus:outline-offset-2
               disabled:opacity-50 disabled:pointer-events-none
               transition-colors"
>
  Primary Action
</button>

<!-- Secondary / outline -->
<button
  class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
               text-gray-700 dark:text-gray-300
               hover:bg-gray-50 dark:hover:bg-gray-800
               focus:outline-2 focus:outline-primary-500 focus:outline-offset-2
               transition-colors"
>
  Secondary
</button>

<!-- Danger -->
<button
  class="px-4 py-2 bg-danger text-white font-medium rounded-md
               hover:bg-red-700
               focus:outline-2 focus:outline-red-500 focus:outline-offset-2
               transition-colors"
>
  Delete
</button>
```

### Card

```html
<div class="bg-surface-0 dark:bg-surface-800 rounded-lg shadow-md overflow-hidden">
  <img src="/image.jpg" alt="" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
      Card Title
    </h2>
    <p class="text-gray-600 dark:text-gray-400">Card content goes here.</p>
  </div>
</div>
```

### Form Input

```html
<div class="flex flex-col gap-2">
  <label for="email" class="text-sm font-medium text-gray-700 dark:text-gray-300">
    Email
  </label>
  <input
    type="email"
    id="email"
    class="w-full px-3 py-2 rounded-md
           border border-gray-300 dark:border-gray-600
           bg-surface-0 dark:bg-surface-800
           text-gray-900 dark:text-gray-100
           placeholder:text-gray-400
           focus:outline-2 focus:outline-primary-500 focus:outline-offset-2
           transition-colors"
    placeholder="you@example.com"
  />
  <p class="text-sm text-gray-500 dark:text-gray-400">Helper text.</p>
</div>
```

## Custom Styles

### @apply Directive

Inline utility classes into custom CSS. Use sparingly — prefer utility classes in templates:

```css
.btn-primary {
  @apply px-4 py-2 font-medium rounded-md transition-colors;
  @apply bg-primary-600 text-white hover:bg-primary-700;
  @apply focus:outline-2 focus:outline-primary-500 focus:outline-offset-2;
  @apply disabled:opacity-50 disabled:pointer-events-none;
}
```

### @utility — Custom Utilities

Register custom utilities that work with all variants (hover, focus, responsive, etc.):

```css
@utility content-auto {
  content-visibility: auto;
}

@utility scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
```

```html
<div class="content-auto hover:content-auto">Works with variants</div>
```

### @custom-variant — Custom Variants

Create project-specific variants:

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
@custom-variant touch (@media (pointer: coarse));
```

```html
<div class="theme-midnight:bg-indigo-900">Midnight theme</div>
<button class="touch:min-h-12 touch:min-w-12">Touch-friendly</button>
```

### @variant — Apply Variants in Custom CSS

```css
.my-element {
  background: white;
  @variant dark {
    background: black;
  }
  @variant dark {
    @variant hover {
      background: #1a1a2e;
    }
  }
}
```

### @layer — Organizing Custom CSS

```css
@layer base {
  h1 {
    font-size: var(--text-2xl);
  }
  h2 {
    font-size: var(--text-xl);
  }
}

@layer components {
  .card {
    background-color: var(--color-surface-0);
    border-radius: var(--radius-lg);
    padding: --spacing(6);
    box-shadow: var(--shadow-md);
  }
}

@layer utilities {
  /* Custom one-off utilities */
}
```

## Vue-Specific Patterns

### @reference in Style Blocks

To use `@apply` or `@variant` inside Vue SFC `<style>` blocks, import your stylesheet with `@reference` (avoids duplicating CSS output):

```vue
<template>
  <h1 class="heading">Hello world!</h1>
</template>

<style scoped>
@reference "@/assets/main.css";

.heading {
  @apply text-2xl font-bold text-primary-600;
}
</style>
```

If using only the default Tailwind theme (no custom `@theme`):

```vue
<style scoped>
@reference "tailwindcss";
/* ... */
</style>
```

### Dynamic :class Bindings

```vue
<template>
  <!-- Object syntax -->
  <button
    :class="{
      'bg-primary-600 text-white hover:bg-primary-700': variant === 'primary',
      'border border-gray-300 text-gray-700 hover:bg-gray-50': variant === 'secondary',
      'opacity-50 pointer-events-none': disabled,
    }"
    class="px-4 py-2 rounded-md font-medium transition-colors
           focus:outline-2 focus:outline-primary-500 focus:outline-offset-2"
  >
    <slot />
  </button>

  <!-- Array syntax -->
  <div
    :class="[
      'rounded-lg p-6',
      dark ? 'bg-surface-800 text-gray-100' : 'bg-surface-0 text-gray-900',
    ]"
  >
    Content
  </div>
</template>
```

### RouterLink Active Classes

⚠️ **Critical**: `active-class` matches by route **prefix**. A link to `/` matches EVERY route. Use `exact-active-class` for root routes:

```vue
<RouterLink
  v-for="item in menuItems"
  :key="item.to"
  :to="item.to"
  class="rounded-lg px-3 py-2 text-surface-600 hover:bg-primary-50 hover:text-primary-700"
  :active-class="item.to === '/' ? '' : '!bg-primary-100 !text-primary-800'"
  exact-active-class="!bg-primary-100 !text-primary-800"
>
  {{ item.label }}
</RouterLink>
```

- `active-class`: highlights parent when on child route (e.g., `/productos` active on `/productos/123`)
- `exact-active-class`: highlights only on exact match (required for `/` to avoid matching everything)
- Use `!` prefix to override base text/bg colors with `!important`

### Component Extraction

Extract reusable styled components instead of duplicating long class strings:

```vue
<!-- components/ui/AppButton.vue -->
<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
})
</script>

<template>
  <button
    :disabled="disabled"
    :class="{
      'bg-primary-600 text-white hover:bg-primary-700': variant === 'primary',
      'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800':
        variant === 'secondary',
      'bg-danger text-white hover:bg-red-700': variant === 'danger',
    }"
    class="px-4 py-2 rounded-md font-medium transition-colors
           focus:outline-2 focus:outline-primary-500 focus:outline-offset-2
           disabled:opacity-50 disabled:pointer-events-none"
  >
    <slot />
  </button>
</template>
```

## v4 New Features

### Dynamic Utility Values

Many utilities accept any value without configuration:

```html
<div class="grid grid-cols-15">15 columns, no config needed</div>
<div class="mt-13">margin-top: calc(var(--spacing) * 13)</div>
<div class="w-17">width: calc(var(--spacing) * 17)</div>
<div data-current class="opacity-75 data-current:opacity-100">Data attributes</div>
```

### 3D Transforms

```html
<div class="perspective-distant">
  <div class="rotate-x-12 rotate-z-6 transform-3d">3D transformed element</div>
</div>
```

### Expanded Gradients

```html
<!-- Linear with angle -->
<div class="bg-linear-45 from-indigo-500 via-purple-500 to-pink-500"></div>

<!-- Radial gradient -->
<div class="bg-radial-[at_25%_25%] from-white to-gray-900"></div>

<!-- Conic gradient -->
<div class="bg-conic from-red-500 via-yellow-500 to-red-500"></div>

<!-- Color interpolation modifier -->
<div class="bg-linear-to-r/oklch from-indigo-500 to-teal-400">Vivid gradient</div>
```

### @starting-style Transitions

Animate elements when they first appear (no JavaScript needed):

```html
<div
  popover
  id="popover"
  class="transition-all duration-300
     starting:open:opacity-0 starting:open:scale-95
     open:opacity-100 open:scale-100"
>
  Popover with enter animation
</div>
```

### field-sizing Utilities

Auto-resize textareas without JavaScript:

```html
<textarea class="field-sizing-content" placeholder="Grows as you type..."></textarea>
```

### color-scheme Utilities

Fix dark scrollbars and form controls in dark mode:

```html
<html class="dark:color-scheme-dark">
  <!-- Scrollbars and native controls match dark mode -->
</html>
```

### inset-shadow-_ and inset-ring-_

Stack up to four box shadow layers on a single element:

```html
<div
  class="shadow-md inset-shadow-xs ring-1 ring-black/5 inset-ring-1 inset-ring-white/10"
>
  Four shadow layers
</div>
```

## Functions

### --spacing()

Generate spacing values based on your theme in custom CSS:

```css
.my-element {
  margin: --spacing(4); /* → calc(var(--spacing) * 4) */
  padding: --spacing(2) --spacing(4);
}
```

Also useful in arbitrary values:

```html
<div class="py-[calc(--spacing(4)-1px)]">Precise spacing</div>
```

### --alpha()

Adjust color opacity in custom CSS:

```css
.overlay {
  background: --alpha(var(--color-primary-500) / 50%);
  /* → color-mix(in oklab, var(--color-primary-500) 50%, transparent) */
}
```

## Arbitrary Values

For one-off values outside your theme:

```html
<div class="top-[117px]">Custom position</div>
<div class="bg-[#1da1f2]">Custom hex color</div>
<div class="grid-cols-[200px_1fr_200px]">Custom grid</div>

<!-- CSS variable shorthand -->
<div class="fill-(--my-brand-color)">Shorthand for var()</div>

<!-- Type hints for ambiguous values -->
<div class="text-(length:--my-var)">Forces font-size</div>
<div class="text-(color:--my-var)">Forces text color</div>

<!-- Arbitrary properties -->
<div class="[mask-type:luminance] hover:[mask-type:alpha]">Any CSS property</div>
```

## Performance Notes

- v4 is **3.5x faster** on full builds (~100ms) and **100x faster** on incremental builds (microseconds)
- Automatic content detection — no `content` or `purge` config needed
- Uses native CSS features: cascade layers, `@property`, `color-mix()`
- **Browser requirements**: Safari 16.4+, Chrome 111+, Firefox 128+

## Best Practices

1. **Use your theme tokens**: Define colors in `@theme`, reference them in utilities — avoid hardcoding hex values
2. **Prefer `gap` over `space-y`/`space-x`**: Works with flex and grid, handles dynamic layouts better
3. **Use `shrink-0`** not `flex-shrink-0`: The `flex-` prefix forms are v3 legacy
4. **Mobile-first**: Unprefixed classes target all sizes; `sm:` means "small breakpoint and up"
5. **Accessible focus**: Use `focus:outline-2 focus:outline-offset-2 focus:outline-{color}`
6. **Dark mode from the start**: Add `dark:` variants alongside light styles
7. **Extract components**: Move repeated class patterns into framework components, not `@apply` classes
8. **Leverage container queries**: Use `@container` + `@sm`/`@md` for truly responsive components
9. **Dynamic values**: `grid-cols-7`, `mt-13`, `w-17` all work — no need for arbitrary bracket syntax

## Official Documentation

- Tailwind CSS v4 Docs: https://tailwindcss.com/docs
- Theme Variables: https://tailwindcss.com/docs/theme
- Functions & Directives: https://tailwindcss.com/docs/functions-and-directives
- Responsive Design: https://tailwindcss.com/docs/responsive-design
- Dark Mode: https://tailwindcss.com/docs/dark-mode
- Adding Custom Styles: https://tailwindcss.com/docs/adding-custom-styles
