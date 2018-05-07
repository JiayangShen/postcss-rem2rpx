# postcss-remtopx

PostCSS plugin for converting rem to rpx.

## Install

```bash
npm i postcss-rem2rpx -S
```

## Usage

```js
// in postcss.config.js
var rem2rpx = require('postcss-rem2rpx');

module.exports = function() {
    return {
        plugins: [
            rem2rpx({ rootFontSize: 100 })
        ]
    }
}
```

## Options

### `rootFontSize`

Type: `float` Default: `16`

The root font size used to calculate the rem pixel values.

### `precision`

Type: `int` Default: `5`

The decimal numbers to allow the REM units to grow to.


## License

MIT © [Jiayang Shen](https://github.com/JiayangShen)
