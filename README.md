# React Top Scroll

[![npm](https://img.shields.io/npm/v/react_top_scroll)](https://www.npmjs.com/package/react_top_scroll)

A simple "back to top" button for React that scrolls the page to the top smoothly.

![react_top_scroll demo](https://i.postimg.cc/W3CJkkbS/react-top-scroll-demo.gif)

## Behaviour

- Hidden until the page is scrolled down more than 200 px.
- Sticks to the right edge of the window, 100 px from the bottom.
- Shows an arrow; on hover the arrow is replaced by a text label.
- Click scrolls to the top with `window.scrollTo({ top: 0, behavior: "smooth" })`.

## Install

```bash
npm i react_top_scroll
```

The component uses hooks, so it needs React 16.8 or newer. Its
`peerDependencies` still declare React 16, so with React 17/18 and npm 7+
install it with `npm i react_top_scroll --legacy-peer-deps`.

## Usage

```jsx
import TopScroll from "react_top_scroll";

const Page = () => (
  <div>
    {/* long content */}
    <TopScroll />
  </div>
);
```

With custom props:

```jsx
<TopScroll
  btn_text="Back to top"
  arrow_sign="↑"
  options={{ id: "top-scroll", style: { bottom: "40px" } }}
/>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `btn_text` | `string` | `"Click to the Top Scroll"` | Label shown while the button is hovered |
| `arrow_sign` | `string` | `"▲"` | Label shown when the button is not hovered |
| `options` | `object` | `{}` | Extra props spread onto the button's root `div` (e.g. `id`, `className`, `style`) |

## Development

```bash
npm install
npm run build   # bundles src/ into index.js (UMD, React kept external)
```

Source lives in `src/react_top_scroll.js` and `src/styled_components.js`;
the published entry point is the built `index.js`. The build tooling
(webpack 4, node-sass 4) dates from 2021 and needs an older Node (12–14).

## Built with

- React (hooks)
- prop-types
- styled-components

## Author

Alex Galkin ([@megarohas](https://github.com/megarohas)), 2021.

## License

[MIT](LICENSE)
