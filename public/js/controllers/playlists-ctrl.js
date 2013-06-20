/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
    'use strict';

    function PlaylistsCtrl ($scope, $location) {
        $scope.playlists = [
            {
                name: 'Loved'
            }
        ];
        
        $scope.isCurrentPlaylist = function (playlist) {
            var playlistNamePattern = /^\/playlist\/(.*)/,
                matchs = playlistNamePattern.exec($location.path());
            
            return matchs &&
                   matchs[1].toLowerCase() === playlist.name.toLowerCase();
        };
    }

    PlaylistsCtrl.$inject = [ '$scope', '$location' ];
    
    return PlaylistsCtrl;
});
