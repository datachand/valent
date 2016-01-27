(function () {

    "use strict";

    angular.module('valent', ['ngResource', 'ngSanitize', 'ngAnimate', 'ui.router', 'ui.bootstrap']);


    function HelpCtrl ($scope, $log, $http) {

    }

    HelpCtrl.$inject = ["$scope", "$log", "$http"];

    angular.module('valent').controller('HelpCtrl', HelpCtrl);

})();