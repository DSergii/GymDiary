;(function(){
'use strict'

angular
	.module('GymDiary.about', ['ngRoute'])
	.config(['$routeProvider', configAbout])
	.controller('AboutCtrl', AboutCtrl);
	
	AboutCtrl.$inject = ['$scope', '$rootScope'];
	
	function AboutCtrl($scope, $rootScope){
		$scope.title = 'Page About';
		$rootScope.curPath = 'about';
	}
	
	function configAbout($routeProvider){
		$routeProvider.
			when('/about', {
				templateUrl: 'app/about/about.html',
				controller: 'AboutCtrl'
			});
	}
})();