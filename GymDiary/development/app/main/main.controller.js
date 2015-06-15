;(function(){
'use strict'

	angular
		.module('GymDiary.main', ['ngRoute'])
		.config(configMain)
		.controller('MainCtrl', MainCtrl);

		MainCtrl.$inject = ['$scope', '$rootScope'];
		
		function MainCtrl($scope, $rootScope){
			$scope.title = 'Main';
			$rootScope.curPath = 'main';
		}

		function configMain($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'app/main/main.html',
					controller: 'MainCtrl'
				});
		}

})();
