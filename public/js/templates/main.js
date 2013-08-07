/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
  'angular',
  './partials-tpls',
  './components-tpls',
  './angular-ui-tpls',
  './dialog-tpls',
  'angular-ui-bootstrap-collapse',
  'angular-ui-bootstrap-dropdownToggle',
  'angular-ui-bootstrap-dialog',
  'angular-ui-bootstrap-alert'
], function (angular,
             partialsTemplates,
             componentsTemplates,
             angularUiTemplates,
             dialogTemplates) {
  'use strict';

  return angular.module('soundrocket.templates', [
    'ui.bootstrap.collapse',
    'ui.bootstrap.dropdownToggle',
    'ui.bootstrap.dialog',
    'ui.bootstrap.alert',
    partialsTemplates.name,
    componentsTemplates.name,
    angularUiTemplates.name,
    dialogTemplates.name
  ]);
});
