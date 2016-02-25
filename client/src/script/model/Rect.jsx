/**
 * CreateDate 2/25/16
 * Author frank.zhang
 * Description
 */

'use strict';

var util = require('../util.jsx');
var canvas = require('../canvas.jsx');
var Part = require('./Part.jsx');

class Rect extends Part {
  constructor(sx, sy) {
    super(sx, sy);
    this.width = this.height = util.rand(10, 30);
  }

  update() {
    this.x += this.vector.x * this.vector.size;
    this.y += this.vector.y * this.vector.size;
    if (this.x > canvas.CW + this.width || this.x < -this.width || this.y > canvas.CH + this.height || this.y < -this.height) {
      this.reset();
    }
  }

  render(){
    var ctx=canvas.ctx;
    ctx.fillStyle = ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports=Rect;