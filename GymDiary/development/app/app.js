// initialize material design js
$.material.init();
(function(){
	'use strict'
	
	angular
		.module('GymDiary', [
		'ngRoute',
		'firebase',
		'GymDiary.gymfirebase.srv',
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
		.constant('FIREBASE_URL', 'https://gymjournal.firebaseio.com/')
		.controller('AppCtrl', AppCtrl)
				
	gymDiaryConfig.$inject = ['$routeProvider', '$locationProvider'];


	function AppCtrl($scope, $rootScope){

	}
	
	function gymDiaryConfig($routeProvider, $locationProvider){
		$routeProvider.
			otherwise({redirectTo: '/'});
		$locationProvider.html5Mode(false);
	}
})();

