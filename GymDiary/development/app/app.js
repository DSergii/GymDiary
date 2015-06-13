// initialize material design js
$.material.init();
(function(){
	'use strict'
	
	angular
		.module('GymDiary', [
		'ngRoute',
		'GymDiary.about',
		'GymDiary.contact',
		'GymDiary.main'
		])
		.config(gymDiaryConfig)
				
	gymDiaryConfig.$inject = ['$routeProvider'];
	
	function gymDiaryConfig($routeProvider){
		$routeProvider.
			otherwise({redirectTo: '/'});
	}
})();

