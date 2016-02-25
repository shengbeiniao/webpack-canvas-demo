/**
 * CreateDate 2/25/16
 * Author frank.zhang
 * Description
 */

'use strict';

var util = require('../util.jsx');
var canvas = require('../canvas.jsx');
var Part = require('./Part.jsx');

class Round extends Part {
  constructor(sx, sy) {
    super(sx, sy);
    this.radius=util.rand(5, 15);
  }

  update() {
    this.x += this.vector.x * this.vector.size;
    this.y += this.vector.y * this.vector.size;
    if (this.x > canvas.CW + this.radius*2 || this.x < -this.radius*2 || this.y > canvas.CH + this.radius*2 || this.y < -this.radius*2) {
      this.reset();
    }
  }

  render(){
    var ctx=canvas.ctx;
    ctx.fillStyle = ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius,0,Math.PI*2,false);
    ctx.fill();
    ctx.stroke();
  }
}

module.exports=Round;