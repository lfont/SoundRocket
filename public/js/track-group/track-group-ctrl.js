/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define(function () {
  'use strict';

  function TrackGroupCtrl ($scope, $routeParams, trackGroupMdl, userMdl) {
    var group = $routeParams.group || 'loved';
    
    $scope.tracks = null;
    
    trackGroupMdl.get(group)
                 .getTracks($routeParams.user)
                 .then(function (tracks) {
                   $scope.tracks = tracks;
                 });

    $scope.tracksActionsOptions = {
      play: true,
      filterPlaylists: false
    };
    
    $scope.trackActionsOptions = {
      // FIX: The love button should works even if we are on another user'profile.
      loved: userMdl.isLoggedUser($routeParams.user)
    };

    $scope.noTrackTemplateUrl = '';

    $scope.$watchCollection('tracks', function (newTracks, oldTracks) {
      $scope.noTrackTemplateUrl = !newTracks || newTracks.length ?
        '' :
        'templates/track-group/empty-group.html';
    });

    $scope.$on('trackGroup:add', function (event, id, track) {
      var trackIndex;
      if (id === group) {
        trackIndex = $scope.utils.indexOf($scope.tracks, 'url', track.url);
        if (trackIndex < 0) {
          $scope.tracks.push(track);
        }
      }
    });

    $scope.$on('trackGroup:remove', function (event, id, track) {
      var trackIndex;
      if (id === group) {
        trackIndex = $scope.utils.indexOf($scope.tracks, 'url', track.url);
        if (trackIndex > -1) {
          $scope.tracks.splice(trackIndex, 1);
        }
      }
    });
  }

  TrackGroupCtrl.$inject = [ '$scope', '$routeParams',
                             'trackGroupMdl', 'userMdl' ];

  return TrackGroupCtrl;
});
