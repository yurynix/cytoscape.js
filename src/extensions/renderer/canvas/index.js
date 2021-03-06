/*
The canvas renderer was written by Yue Dong.

Modifications tracked on Github.
*/

'use strict';

var util = require('../../../util');

var CR = CanvasRenderer;
var CRp = CanvasRenderer.prototype;

CRp.CANVAS_LAYERS = 3;
//
CRp.SELECT_BOX = 0;
CRp.DRAG = 1;
CRp.NODE = 2;

CRp.BUFFER_COUNT = 3;
//
CRp.TEXTURE_BUFFER = 0;
CRp.MOTIONBLUR_BUFFER_NODE = 1;
CRp.MOTIONBLUR_BUFFER_DRAG = 2;

function CanvasRenderer(options) {
  var r = this;

  r.data = {
    canvases: new Array(CRp.CANVAS_LAYERS),
    contexts: new Array(CRp.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(CRp.CANVAS_LAYERS),

    bufferCanvases: new Array(CRp.BUFFER_COUNT),
    bufferContexts: new Array(CRp.CANVAS_LAYERS)
  };

  r.data.canvasContainer = document.createElement('div');
  var containerStyle = r.data.canvasContainer.style;
  containerStyle.position = 'absolute';
  containerStyle.zIndex = '0';
  containerStyle.overflow = 'hidden';

  options.cy.container().appendChild( r.data.canvasContainer );

  for (var i = 0; i < CRp.CANVAS_LAYERS; i++) {
    var canvas = r.data.canvases[i] = document.createElement('canvas');
    r.data.contexts[i] = canvas.getContext('2d');
    canvas.setAttribute('style', '-ms-touch-action: none; touch-action: none;');
    canvas.style.position = 'absolute';
    canvas.setAttribute('data-id', 'layer' + i);
    canvas.style.zIndex = String(CRp.CANVAS_LAYERS - i);
    r.data.canvasContainer.appendChild(canvas);

    r.data.canvasNeedsRedraw[i] = false;
  }
  r.data.topCanvas = r.data.canvases[0];

  r.data.canvases[CRp.NODE].setAttribute('data-id', 'layer' + CRp.NODE + '-node');
  r.data.canvases[CRp.SELECT_BOX].setAttribute('data-id', 'layer' + CRp.SELECT_BOX + '-selectbox');
  r.data.canvases[CRp.DRAG].setAttribute('data-id', 'layer' + CRp.DRAG + '-drag');

  for (var i = 0; i < CRp.BUFFER_COUNT; i++) {
    r.data.bufferCanvases[i] = document.createElement('canvas');
    r.data.bufferContexts[i] = r.data.bufferCanvases[i].getContext('2d');
    r.data.bufferCanvases[i].style.position = 'absolute';
    r.data.bufferCanvases[i].setAttribute('data-id', 'buffer' + i);
    r.data.bufferCanvases[i].style.zIndex = String(-i - 1);
    r.data.bufferCanvases[i].style.visibility = 'hidden';
    //r.data.canvasContainer.appendChild(r.data.bufferCanvases[i]);
  }

  r.pathsEnabled = true;
}

CRp.redrawHint = function( group, bool ){
  var r = this;

  switch( group ){
    case 'eles':
      r.data.canvasNeedsRedraw[ CRp.NODE ] = bool;
      break;
    case 'drag':
      r.data.canvasNeedsRedraw[ CRp.DRAG ] = bool;
      break;
    case 'select':
      r.data.canvasNeedsRedraw[ CRp.SELECT_BOX ] = bool;
      break;
  }
};

// whether to use Path2D caching for drawing
var pathsImpld = typeof Path2D !== 'undefined';

CRp.path2dEnabled = function( on ){
  if( on === undefined ){
    return this.pathsEnabled;
  }

  this.pathsEnabled = on ? true : false;
};

CRp.usePaths = function(){
  return pathsImpld && this.pathsEnabled;
};

[
  require('./arrow-shapes'),
  require('./drawing-edges'),
  require('./drawing-images'),
  require('./drawing-label-text'),
  require('./drawing-nodes'),
  require('./drawing-redraw'),
  require('./drawing-shapes'),
  require('./export-image'),
  require('./node-shapes')
].forEach(function( props ){
  util.extend( CRp, props );
});

module.exports = CR;
