// initialize material design js
$.material.init();
(function(){
	'use strict'
	
	angular
		.module('GymDiary', [
		'ngRoute',
		'GymDiary.about',
		'GymDiary.contact',
		'GymDiary.main',
		'GymDiary.exercises',
		'GymDiary.statistics',
		'GymDiary.profile',
		'GymDiary.playlist',
		'GymDiary.nutrition'
		])
		.config(gymDiaryConfig)
				
	gymDiaryConfig.$inject = ['$routeProvider', '$locationProvider'];
	
	function gymDiaryConfig($routeProvider, $locationProvider){
		$routeProvider.
			otherwise({redirectTo: '/'});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
})();

