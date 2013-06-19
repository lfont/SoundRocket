/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
    'use strict';
    
    function LayoutCtrl ($scope) {
        $scope.searchBarTemplateUrl = 'search-bar.html';
        $scope.audioPlayerTemplateUrl = 'audio-player.html';
    }
    
    LayoutCtrl.$inject = [ '$scope' ];
    
    return LayoutCtrl;
});
