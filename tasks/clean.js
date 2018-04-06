'use strict';
var config = require( '../config' );
module.exports = function clean( grunt ) {

  require( 'jit-grunt' )( grunt );

  return {
    js: [ "resources/js/*.js", "!resources/js/*.min.js" ]
  };
};
