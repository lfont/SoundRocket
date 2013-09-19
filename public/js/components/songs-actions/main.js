/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
  'angular',
  'audio-player',
  'track-group',
  './songs-actions-drt-ctrl',
  './songs-actions-drt'
], function (angular,
             audioPlayerModule,
             trackGroupModule,
             SongsActionsDrtCtrl,
             songsActionsDrtFactory) {
  'use strict';
  
  var songbarComponent = angular.module('soundrocket.components.songs-actions', [
    audioPlayerModule.name,
    trackGroupModule.name,
    'soundrocket.components.playlist-chooser'
  ]);
  
  songbarComponent.controller('SongsActionsDrtCtrl', SongsActionsDrtCtrl)
                  .directive('songsActions', songsActionsDrtFactory);
  
  return songbarComponent;
});
