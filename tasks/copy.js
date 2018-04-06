'use strict';

module.exports = function copy( grunt ) {

  require( 'jit-grunt' )( grunt );

  return {
    critical2twig: {
      expand: true,
      src: 'resources/css/build/critical.min.css',
      dest: 'resources/views/PageDesign/Partials/',
      filter: 'isFile',
      flatten: true,
      rename: function ( dest, matchedSrcPath, options ) {
        // return the destination path and filename:
        return ( dest + matchedSrcPath ).replace( 'critical.min.css', 'Critical.twig' );
      }
    }
  };
};
