'use strict';
var config = require( '../config' );
module.exports = function uglify( grunt ) {

  require( 'jit-grunt' )( grunt );

  return {
    app: {
      files: {
        'resources/js/build/app.min.js': [ 'resources/js/app.js' ]
      }
    }
  };
};
