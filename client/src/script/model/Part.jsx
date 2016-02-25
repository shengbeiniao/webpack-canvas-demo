/**
 * CreateDate 2/25/16
 * Author frank.zhang
 * Description
 */

'use strict';

var util=require('../util.jsx');
var Vector=require('../motion/Vector.jsx');

class Part{
  constructor(sx,sy){
    this.x=this.sx=sx;
    this.y=this.sy=sy;
    this.r = util.rand(1, 255);
    this.g = util.rand(1, 255);
    this.b = util.rand(1, 255);
    this.alpha = util.rand(10,100)/100;
    this.color=`rgba(${this.r},${this.g},${this.b},${this.alpha})`;
    this.vector=new Vector(util.rand(-10,10)/10,util.rand(-10,10)/10,10);
    this.lineWidth=1;
  }
  reset(){
    this.x=this.sx;
    this.y=this.sy;
  }
}

module.exports=Part;