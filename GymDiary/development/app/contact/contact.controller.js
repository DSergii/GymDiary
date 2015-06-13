;(function(){
'use strict'

angular
	.module('GymDiary.contact', ['ngRoute'])
	.config( configContact )
	.controller('ContactCtrl', ContactCtrl);
	
	ContactCtrl.$inject = ['$scope'];
	
	function ContactCtrl($scope){
		$scope.title = 'Contact';
	}
	
	function configContact($routeProvider){
		$routeProvider
			.when('/contact', {
				templateUrl: 'app/contact/contact.html',
				controller: 'ContactCtrl'
			});
	}
})();