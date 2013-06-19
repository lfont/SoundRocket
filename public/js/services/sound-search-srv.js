/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

define([
    'lib/tomahawk'
], function (Tomahawk) {
    'use strict';
    
    var tomahawk = new Tomahawk([
        'soundcloud',
        'exfm'
    ]);
    
    function SoundSearchSrvFactory ($q, $rootScope) {
        
        return {
            search: function (searchString) {
                var deferred = $q.defer();
                
                var promise = tomahawk.search(searchString);
                promise.done(function (results) {
                    var playlist = {
                        type: 'search',
                        name: searchString,
                        songs: results
                    };
                    
                    deferred.resolve(playlist);
                    $rootScope.$apply();
                });
                promise.fail(function (error) {
                    deferred.reject(error);
                    $rootScope.$apply();
                });
                
                return deferred.promise;
            }
        };
    }
    
    SoundSearchSrvFactory.$inject = [ '$q', '$rootScope' ];
    
    return SoundSearchSrvFactory;
});
