$( document ).ready( function () {


  /*
  ███    ███  ██████  ██████  ██ ██      ███████     ███    ███ ███████ ███    ██ ██    ██
  ████  ████ ██    ██ ██   ██ ██ ██      ██          ████  ████ ██      ████   ██ ██    ██
  ██ ████ ██ ██    ██ ██████  ██ ██      █████       ██ ████ ██ █████   ██ ██  ██ ██    ██
  ██  ██  ██ ██    ██ ██   ██ ██ ██      ██          ██  ██  ██ ██      ██  ██ ██ ██    ██
  ██      ██  ██████  ██████  ██ ███████ ███████     ██      ██ ███████ ██   ████  ██████
  */
  var mobileMenu = $( "#mmenu" );

  ( function () {
    "use strict";
    var toggles = document.querySelectorAll( ".c-hamburger" );
    for ( var i = toggles.length - 1; i >= 0; i-- ) {
      var toggle = toggles[ i ];
      toggleHandler( toggle );
    }

    function toggleHandler( toggle ) {
      toggle.addEventListener( "click", function ( e ) {
        e.preventDefault();
        $( this ).toggleClass( 'is-active' );
      } );
    }
  } )();

  mobileMenu.mmenu( {
    extensions: [ "multiline", "pagedim-black", "effect-menu-slide" ],
    navbar: {
      title: false
    },
    navbars: [ {
      position: "top",
      content: [ "searchfield", ],
      height: 2
    } ],
    searchfield: {
      add: true,
      // search: false,
      placeholder: "Kategorie suchen",
      noResults: "Keine Kategorie gefunden",
      "resultsPanel": true
    }
  }, {
    offCanvas: {
      pageSelector: "#mw"
    },
    "searchfield": {
      "clear": true
    }
  } );

  mobileMenu.data( 'mmenu' ).bind( 'closed', function () {
    $( '.c-hamburger' ).removeClass( 'is-active' );
  } );

  var API = mobileMenu.data( "mmenu" );

  $( ".mm-menu a" ).not( '.mm-next, .mm-prev, .mm-title' ).click( function () {
    API.close();
  } );




  /*
  ███████ ██      ██  ██████ ██   ██      ███████ ██      ██ ██████  ███████ ██████
  ██      ██      ██ ██      ██  ██       ██      ██      ██ ██   ██ ██      ██   ██
  ███████ ██      ██ ██      █████  █████ ███████ ██      ██ ██   ██ █████   ██████
       ██ ██      ██ ██      ██  ██            ██ ██      ██ ██   ██ ██      ██   ██
  ███████ ███████ ██  ██████ ██   ██      ███████ ███████ ██ ██████  ███████ ██   ██
  */

  if ( $( '.slick' ).length > 0 ) {
    $( '.slick' ).on( 'init', function ( slick ) {
      $( '.home-slider button, .home-slider .title' ).css( 'opacity', 100 );
      $( '.home-slider a' ).css( 'background', 'none' );
    } );

    $( '.slick' ).slick();
  }



} );
