/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
  'use strict';

  function TopAlbumsCtrl ($scope, $routeParams, artistInfoSrv) {
    $scope.albums = null;
    
    artistInfoSrv.getTopAlbums($routeParams.artist)
                 .then(function (albums) {
                    $scope.albums = albums;  
                 });
    
    $scope.loadAlbumTracks = function (album) {
      album.tracks = artistInfoSrv.getAlbumTracks($routeParams.artist, album.name);
    };
  }

  TopAlbumsCtrl.$inject = [ '$scope', '$routeParams', 'artistInfoSrv' ];

  return TopAlbumsCtrl;
});
