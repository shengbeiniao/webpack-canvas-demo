/**
 * CreateDate 2/24/16
 * Author frank.zhang
 * Description
 */

'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const CW=canvas.width=window.innerWidth;
const CH=canvas.height=window.innerHeight;

module.exports={
  ctx:ctx,
  CW:CW,
  CH:CH
}

