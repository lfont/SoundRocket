/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
  'angular',
  'keyboard-shortcuts',
  './user-menu-ctrl',
  './user-srv',
  './user-mdl',
  'angular-cookies'
], function (angular,
             keyboardShortcutsModule,
             UserMenuCtrl,
             UserSrv,
             UserMdl) {
  'use strict';

  var module = angular.module('soundrocket.user', [
    'ngCookies',
    keyboardShortcutsModule.name
  ]);
  
  module.controller('UserMenuCtrl', UserMenuCtrl)
        .service('userSrv', UserSrv)
        .service('userMdl', UserMdl);

  return module;
});
