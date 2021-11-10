# React Top Scroll

Simple button that scrolls page to the top smoothly. [Demo](https://megarohas-demos.herokuapp.com/react_top_scroll_demo)
[![react-top-scroll-demo.gif](https://i.postimg.cc/W3CJkkbS/react-top-scroll-demo.gif)](https://postimg.cc/Vr96y5tb)

## Getting Started

### Installing

```
npm i --save react_top_scroll
```

## Import and use

on a single component

```javascript
import TopScroll from "react_top_scroll";

<div>
  <TopScroll />
</div>;
```

## Props

| Name       | Type   | Default                 | Description                                                  |
| ---------- | ------ | ----------------------- | ------------------------------------------------------------ |
| btn_text   | String | Click to the Top Scroll | Text that will be displayed after hovering the button        |
| arrow_sign | String | ⬆️                      | Arrow Sign                                                   |
| options    | Object | {}                      | Object that will be spreaded in the top div of the component |

## Built With

- react.js
- prop-types
- styled-components

## Authors

- **Alex Galkin (@megarohas)**

###### built in 2021
