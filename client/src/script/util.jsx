/**
 * CreateDate 2/25/16
 * Author frank.zhang
 * Description
 */

'use strict';

module.exports.rand = function (min, max) {
  return Math.floor((Math.random() * (max - min + 1) ) + min);
};
