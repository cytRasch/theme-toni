'use strict';

var config = require( '../config' );

module.exports = function postcss( grunt ) {

  require( 'jit-grunt' )( grunt );

  return {
    options: {
      map: false,
      processors: [
        require( 'autoprefixer' )( {
          browsers: [ 'last 2 version' ],
          grid: true
        } )
      ]
    },
    critical: {
      src: "resources/css/build/critical.min.css"
    },
    main: {
      src: "resources/css/build/main.min.css"
    }
  };
};
