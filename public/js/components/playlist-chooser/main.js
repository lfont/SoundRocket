/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
    'angular',
    './playlist-chooser-drt-ctrl',
    './playlist-chooser-drt'
], function (angular,
             PlaylistChooserDrtCtrl,
             playlistChooserDrtFactory) {
    'use strict';
    
    var playlistChooserComponent = angular.module('soundrocket.components.playlist-chooser', [
        'soundrocket.models'
    ]);
    
    playlistChooserComponent.controller('PlaylistChooserDrtCtrl', PlaylistChooserDrtCtrl)
                            .directive('playlistChooser', playlistChooserDrtFactory);
    
    return playlistChooserComponent;
});
