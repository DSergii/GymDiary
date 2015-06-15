;(function(){
	'use strict'

angular
	.module('GymDiary.exercises', ['ngRoute'])
	.config(ConfigExercicses)
	.controller('ExercisesCtrl', ExercisesCtrl);


	ExercisesCtrl.$inject = ['$scope', '$rootScope'];

	function ExercisesCtrl($scope, $rootScope){
		$scope.title = 'Exercises';
		$rootScope.curPath = 'exercises';
	}

	function ConfigExercicses($routeProvider){
		$routeProvider
			.when('/exercises', {
				templateUrl: 'app/exercises/exercises.html',
				controller: 'ExercisesCtrl'
			});
	}


})();