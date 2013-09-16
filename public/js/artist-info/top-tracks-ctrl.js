/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
  'use strict';

  function TopTracksCtrl ($scope, $routeParams, artistInfoSrv) {
    $scope.tracks = artistInfoSrv.getTopTracks($routeParams.artist);
  }

  TopTracksCtrl.$inject = [ '$scope', '$routeParams', 'artistInfoSrv' ];

  return TopTracksCtrl;
});
