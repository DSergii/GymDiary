// initialize material design js
$.material.init();
(function(){
	'use strict'
	
	angular
		.module('GymDiary', ['ngRoute'])
		.config(gymDiaryConfig)
		.controller('MainCtrl', function($scope){
			
		})
		.controller('AboutCtrl', function($scope){
			
		})
		.controller('ContactCtrl', function($scope){
			
		})
		.controller('ExercisesCtrl', function($scope){
			
		})
		.controller('StatisticsCtrl', function($scope){
			
		})
		.controller('ProfileCtrl', function($scope){
			
		})
		.controller('PlayListCtrl', function($scope){
			
		})
		.controller('NutritionCtrl', function($scope){
			
		});
		
	function gymDiaryConfig($routeProvider){
		$routeProvider
			.when('#/', {
				templateUrl: 'index.html',
				controller: "MainCtrl"
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: "AboutCtrl"
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: "ContactCtrl"
			})
			.when('/exercises', {
				templateUrl: 'views/exercises.html',
				controller: "ExercisesCtrl"
			})
			.when('/statistics', {
				templateUrl: 'views/statistics.html',
				controller: "StatisticsCtrl"
			})
			.when('/profile', {
				templateUrl: 'views/profile.html',
				controller: "ProfileCtrl"
			})
			.when('/playlist', {
				templateUrl: 'views/playlist.html',
				controller: "PlayListCtrl"
			})
			.when('/nutrition', {
				templateUrl: 'views/nutrition.html',
				controller: "NutritionCtrl"
			})
			.otherwise({
				
			});
	}
})();

