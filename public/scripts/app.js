/*jshint -W117 */
/*jshint -W109 */
/*jshint -W098 */
/**
 * Load controllers, directives, filters, services before bootstrapping the application.
 * NOTE: These are named references that are defined inside of the config.js RequireJS configuration file.
 */
define([
    'jquery',
    'angular',
    'main',
    'routes',
    'interceptors',
    'angular-resource',
], function ($, angular) {
    'use strict';

    /**
     * Application definition
     * This is where the AngularJS application is defined and all application dependencies declared.
     * @type {module}
     */
    var app = angular.module('app', [
        'app.routes',
        'app.interceptors',
        'sample.module',
        'ngResource'
    ]);

    /**
     * Main Controller
     * This controller is the top most level controller that allows for all
     * child controllers to access properties defined on the $rootScope.
     */
    app.controller('MainCtrl', ['$scope', '$rootScope', '$state', '$location',
        function ($scope, $rootScope, $state, $location) {

        // $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        //     if (angular.isObject(error) && angular.isString(error.code)) {
        //         switch (error.code) {
        //             case 'UNAUTHORIZED':
        //                 //redirect
        //                 predixUserService.login(toState);
        //                 break;
        //             default:
        //                 //go to other error state
        //         }
        //     }
        //     else {
        //         // unexpected error
        //     }
        // });
    }]);

    //Set on window for debugging
    window.app = app;

    //Return the application  object
    return app;
});
