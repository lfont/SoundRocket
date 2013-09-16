/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
  'use strict';

  function ArtistInfoSrv ($http) {

    function getInfo (artist) {
      return $http
        .get('/api/artists/' + artist, { cache: true })
        .then(function (response) {
          return response.data;
        });
    }

    this.getInfo = function (artist) {
      return getInfo(artist)
        .then(function (info) {
          return {
            name: info.name,
            artworkUrl: info.artworkUrl,
            bio: info.bio
          };
        });
    };
    
    this.getSimilar = function (artist) {
      return getInfo(artist)
        .then(function (info) {
          return info.similarArtists;
        });
    };
    
    this.getTopTracks = function (artist) {
      return $http
        .get('/api/artists/' + artist + '/tracks', { cache: true })
        .then(function (response) {
          return response.data;
        });
    };
  }

  ArtistInfoSrv.$inject = [ '$http' ];

  return ArtistInfoSrv;
});