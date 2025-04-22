# InvertPage

Inverts the page colors as a page action.

## Implementation

It inserts a `<style>` element into the `<head>` of the page. It uses `filter: invert()` to invert the colors.

If the `<style>` element already exists, it is removed instead.

# Development

> Note that the `scripts` in `package.json` must `cd` into `src` before running `web-ext`. Otherwise it complains about ES6 modules not being supported.

## Building

To build using `web-ext`, run:

```bash
pnpm we:build
```

## Running

To run in `Firefox Developer Edition`, run:

```bash
pnpm run we:run
```

## Manual testing

With the web extension [Adaptive Tab Bar Color](https://addons.mozilla.org/en-US/firefox/addon/adaptive-tab-bar-colour/), use the websites:

- Light: [Wikipedia](https://wikipedia.org/)
- Dark: [Extension Workshop](https://extensionworkshop.com/)

## Known issues

- The page action will not run a second time. If running the extension via scripts, re-saving a file will fix it once.