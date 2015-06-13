;(function(){
'use strict'

	angular
		.module('GymDiary.main', ['ngRoute'])
		.config(configMain)
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['$scope'];
		
		function MainCtrl($scope){
		
			$scope.title = 'Main';
		
		}

		function configMain($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'app/main/main.html',
					controller: 'MainCtrl'
				});
		}

})();
