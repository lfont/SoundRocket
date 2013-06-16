/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
    'use strict';
    
    function ArtworkDrtFactory (artworkSrv) {
        
        return {
            restrict: 'E',
            replace: true,
            scope: {
                song: '@'
            },
            template: '<img alt="{{ alt }}" ng-src="{{ src }}" ng-style="style" />',
            
            link: function (scope, iElement, iAttrs) {
                iAttrs.$observe('song', function (val) {
                    scope.$parent.$watch(val, function (newSong, oldSong) {
                        var url = artworkSrv.getSongArtwork(newSong);
                        scope.alt = newSong ?
                            newSong.artist + ' - ' + newSong.track :
                            'none';
                        // TODO: the artwork service should returns resized image.
                        scope.style = { width: '64px', height: '64px' };
                        scope.src = url;
                    });
                });
            }
        };
    }
    
    ArtworkDrtFactory.$inject = [ 'artworkSrv' ];
    
    return ArtworkDrtFactory;
});
