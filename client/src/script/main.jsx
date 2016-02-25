/**
 * CreateDate 2/24/16
 * Author frank.zhang
 * Description
 */

'use strict';

var parts = [],
  partCount = 100,
  partsFull = false;

var Rect=require('./model/Rect.jsx');
var Round=require('./model/Round.jsx');

var create = function(type){
  if(!partsFull){
    if(parts.length > partCount){
      partsFull = true;
    } else {
      switch(type){
        case 'Rect':{
          parts.push(new Rect(canvas.CW/2,canvas.CH/2-100));
          break;
        }
        case 'Round':{
          parts.push(new Round(canvas.CW/2,canvas.CH/2-100));
          break;
        }
        default:{
          parts.push(new Rect(canvas.CW/2,canvas.CH/2-100));
        }
      }
    }
  }
};

var update = function(){
  var i = parts.length;
  while(i--){
    parts[i].update();
  }
};

var render= function(){
  var i = parts.length;
  while(i--){
    parts[i].render();
  }
};

var canvas=require('./canvas.jsx');
var ctx=canvas.ctx;

var clear = function(){
  ctx.globalCompositeOperation = 'destination-out';
  ctx.clearRect(0, 0, canvas.CW, canvas.CH);
  ctx.globalCompositeOperation = 'lighter';
};

var frame=1;
var count=1;
var loop = function(timestamp){
  window.requestAnimationFrame(loop);
  clear();

  if(frame%300!=0){
    if(count%2==0){
      create('Rect');
    }else{
      create('Round');
    }
  }else{
    parts=[];
    partsFull=false;
    count++;
  }

  update();
  render();
  frame++;
};

loop(0);

