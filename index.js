/**
 * Module dependencies
 */

var palette = require('palette');
var Color = require('color');

var output = {};

/**
 * Iterate over keys and add 3 light/dark values
 */

for (var key in palette) {
  var val = palette[key];
  output[key] = val;
  output[key + '-light'] = Color(val).lighten(.1).hslString();
  output[key + '-lighter'] = Color(val).lighten(.2).hslString();
  output[key + '-lightest'] = Color(val).lighten(.3).hslString();
  output[key + '-dark'] = Color(val).darken(.1).hslString();
  output[key + '-darker'] = Color(val).darken(.2).hslString();
  output[key + '-darkest'] = Color(val).darken(.3).hslString();
}

module.exports = output;
