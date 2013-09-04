/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
  'angular',
  './layout-ctrl',
  './root-ctrl',
  './playlist-ctrl',
  './songs-group-ctrl',
  './user-menu-ctrl',
  './settings-ctrl',
  './user-profile-ctrl',
  './user-profile-menu-ctrl'
], function (angular,
             LayoutCtrl,
             RootCtrl,
             PlaylistCtrl,
             SongsGroupCtrl,
             UserMenuCtrl,
             SettingsCtrl,
             UserProfileCtrl,
             UserProfileMenuCtrl) {
  'use strict';

  return angular.module('soundrocket.controllers', [])
                .controller('LayoutCtrl', LayoutCtrl)
                .controller('RootCtrl', RootCtrl)
                .controller('PlaylistCtrl', PlaylistCtrl)
                .controller('SongsGroupCtrl', SongsGroupCtrl)
                .controller('UserMenuCtrl', UserMenuCtrl)
                .controller('SettingsCtrl', SettingsCtrl)
                .controller('UserProfileCtrl', UserProfileCtrl)
                .controller('UserProfileMenuCtrl', UserProfileMenuCtrl);
});
