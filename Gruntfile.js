'use strict';

module.exports = function ( grunt ) {
  var pkg = grunt.file.readJSON( 'package.json' );
  var bs = require( 'browser-sync' ).create();
  var settings = require( './settings' );

  grunt.initConfig( {
    pkg: pkg
  } );

  require( 'grunt-config-dir' )( grunt, {
    configDir: require( 'path' ).resolve( 'tasks' )
  } );

  grunt.registerTask( "bs-init", function () {
    var done = this.async();
    bs.init( {
      watchTask: true,
      proxy: {
        target: "https://www.widshops.com/",
        proxyReq: [
          function ( proxyReq ) {
            proxyReq.setHeader( 'set-cookie', settings.cookie.value );
          }
        ]
      },
      files: [ 'resources/css/build/*.min.css' ],
      serveStatic: [ {
        route: '/resources',
        dir: 'resources'
      } ],
      open: true,
      notify: false,
      ghostMode: {
        clicks: false,
        forms: true,
        scroll: false
      },
      plugins: [ 'bs-rewrite-rules' ],
      rewriteRules: [ {
        match: /https:\/\/s3-eu-west-1.amazonaws.com\/plentymarkets-public-94\/nfy0mvep6dys\/plugin\/stage\/ceresvanilla/g,
        replace: '/resources'
      } ],
      middleware: [
        function ( req, res, next ) {
          res.setHeader( 'Access-Control-Allow-Origin', '*' );
          res.setHeader( 'set-cookie', settings.cookie.value );
          next();
        }
      ]
    }, function ( err, bs ) {
      done();
    } );
  } );

  grunt.registerTask( 'default', [ 'bs-init', 'watch' ] );
  grunt.registerTask( 'build', [ 'spriteSheet', 'sass', 'postcss', 'copy', 'concat', 'uglify' ] );

  grunt.registerTask( 'buildCSSCritical', [ 'sass:critical', 'postcss:critical', 'copy' ] );
  grunt.registerTask( 'buildCSSMain', [ 'sass:main', 'postcss:main' ] );

  grunt.registerTask( 'buildJS', [ 'concat:app', 'uglify:app' ] );

  grunt.registerTask( 'spriteSheet', [ 'sprite', 'sass:critical' ] );
};
