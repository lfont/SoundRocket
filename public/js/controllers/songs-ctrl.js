/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
    'use strict';

    function SongsCtrl ($scope, $routeParams, songsMdl) {
        
        function setSongsStore (name) {
            var songsStore = songsMdl.getSongsStore(name),
                promise    = songsStore.songs();
            
            $scope.name = songsStore.name;
            
            promise.then(function (songs) {
                $scope.songs = songs;
            }, function (error) {
                // TODO: handle error
            });
        }
        
        $scope.songsActionsOptions = {
            play: true,
            filterPlaylists: false
        };
        
        $scope.songsStatusTemplateUrl = 'songs-status.html';
        $scope.playlistsTemplateUrl = 'playlists.html';
        $scope.name = '';
        $scope.songs = [];
        
        $scope.$on('songsStore:add', function (event, name, song) {
            if (name === 'Loved') {
                $scope.songs.push(song);
            }
        });
        
        $scope.$on('songsStore:remove', function (event, name, song) {
            var index;
            if (name === 'Loved') {
                index = $scope.songs.indexOf(song);
                $scope.songs.splice(index, 1);
            }
        });
        
        setSongsStore($routeParams.name);
    }

    SongsCtrl.$inject = [ '$scope', '$routeParams', 'songsMdl' ];
    
    return SongsCtrl;
});
