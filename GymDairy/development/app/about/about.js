,(function(){
'use strict'

angular
	.module('GymDiary.about', ['ngRoute'])
	.config(['$routeProvider', config])
	.controller('AboutCtrl', AboutCtrl);
	
	AboutCtrl.$inject = ['$scope'];
	
	function AboutCtrl($scope){
		$scope.title = 'Page About';
	}
	
	function config($routeProvider){
		$routeProvider
			.when('/about', {
				templateUrl: 'app/about/about.html',
				controller: 'AboutCtrl'
			});
	}
})();