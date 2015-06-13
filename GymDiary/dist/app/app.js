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


;(function(){
'use strict'

angular
	.module('GymDiary.about', ['ngRoute'])
	.config(['$routeProvider', configAbout])
	.controller('AboutCtrl', AboutCtrl);
	
	AboutCtrl.$inject = ['$scope'];
	
	function AboutCtrl($scope){
		$scope.title = 'Page About';
	}
	
	function configAbout($routeProvider){
		$routeProvider.
			when('/about', {
				templateUrl: 'app/about/about.html',
				controller: 'AboutCtrl'
			});
	}
})();
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

/**
 * Created by szaharov on 28/05/15.
 */
