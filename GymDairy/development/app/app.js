// initialize material design js
$.material.init();
(function(){
	'use strict'
	
	angular
		.module('GymDiary', ['ngRoute'])
		.config(gymDiaryConfig);
		
	function gymDiaryConfig($routeProvider){
		$routeProvider
			.when('/about', {
				templateUrl: 'views/about.html'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html'
			})
			.when('/exercises', {
				templateUrl: 'views/exercises.html'
			})
			.when('/statistics', {
				templateUrl: 'views/statistics.html'
			})
			.when('/profile', {
				templateUrl: 'views/profile.html'
			})
			.when('/playlist', {
				templateUrl: 'views/playlist.html'
			})
			.when('/nutrition', {
				templateUrl: 'views/nutrition.html'
			});
	}
})();

