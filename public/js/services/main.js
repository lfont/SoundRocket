/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
    'angular',
    './sound-search-srv',
    './audio-player-srv',
    './artwork-srv',
    './playlist-srv'
], function (angular, SoundSearchSrvFactory,
             AudioPlayerSrvFactory, ArtworkSrvFactory,
             playlistSrvFactory) {
    'use strict';
    
    return angular.module('soundrocket.services', [])
                  .service('soundSearchSrv', SoundSearchSrvFactory)
                  .service('audioPlayerSrv', AudioPlayerSrvFactory)
                  .service('artworkSrv', ArtworkSrvFactory)
                  .service('playlistSrv', playlistSrvFactory);
});
