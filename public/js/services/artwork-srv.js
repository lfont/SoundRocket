/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
    'use strict';
    
    function ArtworkSrvFactory () {
        
        return {
            getSongArtwork: function (song) {
                if (!song || !song.artworkUrl) {
                    // TODO: try to get the artwork from last.fm
                    return '/img/120_album.png';
                }
                
                return song.artworkUrl;
            }
        };
    }
    
    ArtworkSrvFactory.$inject = [];
    
    return ArtworkSrvFactory;
});
