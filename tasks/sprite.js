'use strict';
var config = require( '../config' );
module.exports = function sprite( grunt ) {

  // grunt.loadNpmTasks( 'grunt-spritesmith' );
  require( 'jit-grunt' )( grunt, {
    sprite: 'grunt-spritesmith',
  } );

  return {
    normal: {
      src: 'resources/img/sprite/*.png',
      retinaSrcFilter: [ 'resources/img/sprite/*@2x.png' ],
      retinaDest: 'resources/documents/sprite-2x.png',
      dest: 'resources/documents/sprite.png',
      cssFormat: 'css_retina',
      destCss: 'resources/css/edit/critical/_sprites.scss',
      imgPath: 'sprite.png',
      retinaImgPath: 'sprite-2x.png',
      padding: 3
    }
  };
};
