/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
    'use strict';
    
    function songDrtFactory () {
        
        return {
            restrict: 'E',
            replace: true,
            scope: {
                customOptions: '=options',
                song: '=',
                onRemove: '&'
            },
            templateUrl: 'song-drt.html',
            controller: 'SongDrtCtrl'
        };
    }
    
    return songDrtFactory;
});
