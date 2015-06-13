;(function(){
'use strict'

angular
	.module('GymDiary.about', ['ngRoute'])
	.config(['$routeProvider', configAbout])
	.controller('AboutCtrl', AboutCtrl);
	
	AboutCtrl.$inject = ['$scope'];
	
	function AboutCtrl($scope){
		$scope.title = 'Page About';
	}
	
	function configAbout($routeProvider){
		$routeProvider.
			when('/about', {
				templateUrl: 'app/about/about.html',
				controller: 'AboutCtrl'
			});
	}
})();