/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
    'angular'
], function (angular) {
    'use strict';

    function PlaylistChooserDrtCtrl ($scope, $location, playlistMdl) {
        var DEFAULT_OPTIONS = {
            filter: true
        };
        
        function filterPlaylistStoresForLocation (playlistStores) {
            var playlistNamePattern = /^\/playlist\/(.*)/,
                stores = [],
                i, len, playlistStore, matchs;
            
            for (i = 0, len = playlistStores.length; i < len; i++) {
                playlistStore = playlistStores[i];
                matchs = playlistNamePattern.exec($location.path());
                if (!matchs ||
                    matchs[1].toLowerCase() !== playlistStore.name.toLowerCase())
                {
                    stores.push(playlistStore);
                }
            }
            
            return stores;
        }
        
        function loadPlaylistStores () {
            var opts    = angular.extend({}, DEFAULT_OPTIONS, $scope.options),
                promise = playlistMdl.getPlaylistStores();
            
            promise.then(function (playlistStores) {
                $scope.playlistStores = opts.filter ?
                    filterPlaylistStoresForLocation(playlistStores) :
                    playlistStores;
            }, function (error) {
                // TODO: handle error
            });
        }
        
        $scope.playlistName = '';
        
        $scope.createPlaylist = function () {
            var playlistStore = playlistMdl.createPlaylistStore($scope.playlistName);
            $scope.playlistStores.push(playlistStore);
            $scope.playlistName = '';
        };

        $scope.addToPlaylist = function (playlistStore) {
            playlistStore.add($scope.songs);
        };
        
        loadPlaylistStores();
    }
     
    PlaylistChooserDrtCtrl.$inject = [ '$scope', '$location', 'playlistMdl' ];
    
    return PlaylistChooserDrtCtrl;
});