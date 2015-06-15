;(function(){
'use strict'

angular
	.module('GymDiary.playlist', ['ngRoute'])
	.config( PlaylistConfig )
	.controller('PlayListCtrl', PlayListCtrl);
	
	PlayListCtrl.$inject = ['$scope', '$rootScope'];
	
	function PlayListCtrl($scope, $rootScope){
		$scope.title = 'PlayList';
		$rootScope.curPath = 'playlist';
	}
	
	function PlaylistConfig($routeProvider){
		$routeProvider
			.when('/playlist', {
				templateUrl: 'app/playlist/playlist.html',
				controller: 'PlayListCtrl'
			});
	}
})();