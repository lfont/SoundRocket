/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
    'angular',
    'angular-ui-utils-keypress',
    'angular-ui-bootstrap-collapse',
    'angular-ui-bootstrap-modal',
    'angular-ui-bootstrap-dropdownToggle',
    'components/song',
    'controllers',
    'services',
    'filters',
    'directives',
    'models'
], function (angular) {
    'use strict';
    
    return angular.module('soundrocket', [
        'ui.keypress',
        'ui.bootstrap.collapse',
        'ui.bootstrap.modal',
        'ui.bootstrap.dropdownToggle',
        'soundrocket.components.song',
        'soundrocket.controllers',
        'soundrocket.services',
        'soundrocket.filters',
        'soundrocket.directives',
        'soundrocket.models'
    ]);
});
