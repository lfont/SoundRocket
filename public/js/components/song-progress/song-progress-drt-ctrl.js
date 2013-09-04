/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
  'angular'
], function (angular) {
  'use strict';

  function SongProgressDrtCtrl ($scope, audioPlayerSrv) {
    var loadingPercentage;

    this.setPlayingPercentage = function (percentage) {
      var position;
      if (!$scope.progress) {
        return;
      }
      position = Math.round(percentage * $scope.progress.duration / 100);
      audioPlayerSrv.setPosition(position);
    };

    $scope.progress = null;
    $scope.loadingPercentage = 0;

    $scope.$on('audioPlayer:play', function (event, loaded) {
      loadingPercentage = loaded ? 100 : 0;
    });

    $scope.$on('audioPlayer:stop', function (event) {
      $scope.progress = null;
      $scope.loadingPercentage = 0;
    });

    $scope.$on('audioPlayer:loading', function (event, percentage) {
      loadingPercentage = percentage;
    });

    $scope.$on('audioPlayer:playing', function (event, progress) {
      $scope.progress = progress;
      $scope.loadingPercentage = progress ?
        loadingPercentage - progress.percentage :
        loadingPercentage;
    });
  }

  SongProgressDrtCtrl.$inject = [ '$scope', 'audioPlayerSrv' ];

  return SongProgressDrtCtrl;
});
