'use strict';

var config = require( '../settings' );

module.exports = function concat( grunt ) {

  require( 'jit-grunt' )( grunt );

  return {
    options: {
      separator: ';'
    },
    app: {
      src: config.javascripts.app.src,
      dest: config.javascripts.app.dest,
      nonull: true
    }
  };
};
