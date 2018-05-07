'use strict';
var postcss = require('postcss');
var merge = require('lodash.merge');

var defaults = {
    rootFontSize: 16,
    precision: 5
};
var remRegx = /([0-9]*\.?[0-9]+)rem/g;

function parseNum(s, dot) {
    var m = Math.pow(10, dot || 5);
    var k = Math.round(parseFloat(s) * m);
    return k / m;
};

module.exports = postcss.plugin('rem2rpx', function (opts) {
    var options = merge({}, defaults, opts);

    function replaceToRpx(match, num) {
        var number = parseNum(parseFloat(num) * options.rootFontSize * 2, options.precision);
        return number + 'rpx';
    }
    
    return function rem2rpx(css) {
        css.walkDecls(function (decl) {
            if (decl.value.indexOf('rem') == -1) return;
            decl.value = decl.value.replace(remRegx, replaceToRpx);
        });
        
        css.walkAtRules('media', function (rule) {
            if (rule.params.indexOf('rem') === -1) return;
            rule.params = rule.params.replace(remRegx, replaceToRpx);
        });
    };
});
