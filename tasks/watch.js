'use strict';
var config = require( '../config' );
module.exports = function watch( grunt ) {

  require( 'jit-grunt' )( grunt );

  return {
    scripts: {
      files: [ 'Gruntfile.js' ],
      tasks: [ 'default' ],
      options: {
        spawn: true,
        interrupt: true
      }
    },
    buildCSSCritical: {
      files: [
        'resources/css/edit/global/_#config.scss',
        'resources/css/edit/global/_helpers.scss',
        'resources/css/edit/global/_critical.scss',
        'resources/css/edit/global/_layout.scss',
        'resources/css/edit/global/_grid.scss',
        'resources/css/edit/critical/**/*.scss',
        'resources/css/critical.scss'
      ],
      tasks: [ 'buildCSSCritical' ]
    },
    buildCSSMain: {
      files: [
        'resources/css/**/*.scss',
        '!resources/css/edit/global/_#config.scss',
        '!resources/css/edit/global/_helpers.scss',
        '!resources/css/edit/global/_critical.scss',
        '!resources/css/edit/global/_layout.scss',
        '!resources/css/edit/global/_grid.scss',
        '!resources/css/edit/critical/**/*.scss',
        '!resources/css/critical.scss'
      ],
      tasks: [ 'buildCSSMain' ]
    },
    buildJS: {
      files: [ 'resources/js/edit/*.js' ],
      tasks: [ 'buildJS' ]
    },
    sprites: {
      files: [ 'resources/img/sprite/*.png' ],
      tasks: [ 'spriteSheet' ]
    }
  };
};
