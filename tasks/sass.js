'use strict';
var config = require( '../config' );
module.exports = function sass( grunt ) {

  require( 'jit-grunt' )( grunt );

  return {
    critical: {
      files: [ {
        expand: true,
        cwd: 'resources/css',
        src: [ 'critical.scss' ],
        dest: 'resources/css/build',
        ext: '.min.css',
        update: true
      } ],
      options: {
        update: true,
        sourcemap: 'false',
        outputStyle: 'compressed',
        precision: 2
      }
    },
    main: {
      files: [ {
        expand: true,
        cwd: 'resources/css',
        src: [ 'main.scss' ],
        dest: 'resources/css/build',
        ext: '.min.css',
        update: true
      } ],
      options: {
        update: true,
        sourcemap: 'false',
        outputStyle: 'compressed',
        precision: 2
      }
    }
  };
};
