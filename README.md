# Atomic Oasis — Design Language

A retro-futurist **desert** design language for software UI. It blends **Googie** signage, **Atomic-Age** futurism, and **Palm Springs desert modernism**, with **breeze-block screens** as its one signature graphic device. Warm, optimistic, space-age, and fully themeable (light + dark).

> **Tagline:** *Make tomorrow tropical.*

## Quick start

Open `index.html` in any browser. It's a single self-contained file — the page is built in the language, so it doubles as a live style guide. Use the **◐ Theme** button in the nav (or your OS setting) to switch light/dark; every token flips, including the breeze screens.

## What's in here

```
index.html              # v2 — the living style guide (open this)
assets/breeze/          # the four breeze-block units as standalone SVGs
  oculus.svg            #   circle screen
  quatrefoil.svg        #   cloud lattice
  vista.svg             #   corner-flower
  diamond.svg           #   diagonal lattice
archive/
  atomic-oasis-v1.html  # frozen v1 (had the motif/icon library)
```

## Using it in other projects

**Tokens.** Everything is driven by CSS custom properties. Copy the `:root` blocks from `index.html` (constant brand hues + light/dark semantic tokens) into your own stylesheet. Components reference only the *semantic* tokens (`--bg`, `--surface`, `--text`, `--border`, `--primary`, `--breeze-block`, etc.), so theming switches from one place.

**Contrast rule (important).** White text fails on aqua and flamingo. Put **ink text on bright fills** (aqua, flamingo, lime, amber, coral) and **white text only on dark fills** (terracotta, palm teal, ink). The `--on-bright` / `--on-dark` tokens encode this.

**Breeze screens.** The four SVGs in `assets/breeze/` are drawn with `currentColor`, so they recolor through CSS. Drop one into a container and set two things:

```css
.my-screen { color: var(--breeze-block); background: var(--breeze-back); }
```

`color` is the screen material; `background` shows through the holes. Use them low-contrast behind/beside content — never run body text directly over a busy lattice. They're meant to be used the way they are in buildings: sun-screens, dividers, façade lattice, card headers, sidebar texture.

## Theming

- Manual toggle remembers your choice in `localStorage`.
- With no stored choice, it follows the OS via `prefers-color-scheme`.
- `prefers-reduced-motion` disables the spring animations and transforms.

## v1 → v2 changelog

v2 is the result of an adversarial review pass on v1. Changes:

- **Removed** the motif/icon library (starburst, sputnik, palm, tiki, etc.). The breeze block is now the single recurring graphic device.
- **Added** real light/dark theming: semantic token architecture, toggle + `prefers-color-scheme` auto-detect.
- **Fixed contrast:** ink-on-bright / white-on-dark button + badge text (v1's white-on-aqua and white-on-flamingo failed WCAG).
- **Fixed focus:** solid 3px focus ring meeting the 3:1 indicator requirement (v1 used a faint translucent glow).
- **Added** `prefers-reduced-motion` support (v1 had none).
- **Readable form labels:** body font, sentence case (v1 used tiny uppercase tracked mono).
- **Bigger hit targets**, added spacing + z-index scales.
- Breeze SVGs use `currentColor` so they actually theme (v1's motif SVGs were hardcoded hex and broke the "swap the palette" promise).

## Still to build for a full production system

Data-viz color ramp (colorblind-safe), tables, modals, tooltips, menus/dropdowns, and empty/loading/skeleton states.

## Using as a package

### Install (git dependency)

```json
// package.json
{
  "dependencies": {
    "@atomic-oasis/core": "github:fishpen0/design-language"
  }
}
```

Or locally:

```bash
npm install ../path/to/design-language
```

### Usage

```js
// Register all components and import styles
import '@atomic-oasis/core';
import '@atomic-oasis/core/styles.css';
```

```html
<ao-button variant="accent">Book now</ao-button>
<ao-badge tone="lime">New</ao-badge>
<ao-alert tone="success" heading="Done">Your booking is confirmed.</ao-alert>
<ao-input label="Email" placeholder="you@example.com"></ao-input>
<ao-toggle checked label="Notifications"></ao-toggle>
<ao-tabs .tabs='["Day","Week","Month"]'></ao-tabs>
<ao-breeze unit="oculus" style="height:200px"></ao-breeze>
```

### Theme

```js
import { initTheme, toggleTheme, setTheme } from '@atomic-oasis/core/theme';

// Call once on app load — reads localStorage + OS preference
initTheme();

// Toggle or set explicitly
toggleTheme();
setTheme('dark');
```

Theme is controlled by `data-theme="light|dark"` on `<html>`. All tokens flip automatically.

### Tokens only

```css
@import '@atomic-oasis/core/tokens.css';
```

### Available components

| Element | Key props |
|---|---|
| `<ao-button>` | `variant` (primary/accent/lime/amber/deep/danger/outline/ghost), `size` (sm/md/lg), `disabled` |
| `<ao-badge>` | `tone` (aqua/pink/lime/amber/ghost) |
| `<ao-alert>` | `tone` (success/info/warning/danger), `heading` |
| `<ao-input>` | `label`, `placeholder`, `value`, `help`, `error`, `type` |
| `<ao-select>` | `label`, `value`, `help`, `error` (options via `<slot>`) |
| `<ao-textarea>` | `label`, `placeholder`, `value`, `rows`, `help`, `error` |
| `<ao-toggle>` | `checked`, `label` |
| `<ao-tabs>` | `.tabs` (string[]), `active` (index) — emits `ao-tab-change` |
| `<ao-panel>` | `flat` |
| `<ao-stat>` | `value`, `label` |
| `<ao-breeze>` | `unit` (oculus/quatrefoil/vista/diamond) |

### Design-sync (planned)

Per-component preview cards with `@dsCard` markers and the `/design-sync` upload layer are planned for a follow-up. The current structure (single `styles.css`, prefixed classes, `dev/index.html` playground) is built to feed this directly.
