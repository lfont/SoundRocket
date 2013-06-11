/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
    'angular',
    './navbar-ctrl',
    './stream-ctrl',
    './search-ctrl',
    './search-result-ctrl',
    './audio-player-ctrl'
], function (angular, NavBarCtrl, StreamCtrl, SearchCtrl,
             SearchResultCtrl, AudioPlayerCtrl) {
    'use strict';
    
    return angular.module('soundrocket.controllers', [])
                  .controller('NavBarCtrl', NavBarCtrl)
                  .controller('StreamCtrl', StreamCtrl)
                  .controller('SearchCtrl', SearchCtrl)
                  .controller('SearchResultCtrl', SearchResultCtrl)
                  .controller('AudioPlayerCtrl', AudioPlayerCtrl);
});
