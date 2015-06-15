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


;(function(){
'use strict'

angular
	.module('GymDiary.about', ['ngRoute'])
	.config(['$routeProvider', configAbout])
	.controller('AboutCtrl', AboutCtrl);
	
	AboutCtrl.$inject = ['$scope', '$rootScope'];
	
	function AboutCtrl($scope, $rootScope){
		$scope.title = 'Page About';
		$rootScope.curPath = 'about';
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
	
	ContactCtrl.$inject = ['$scope', '$rootScope'];
	
	function ContactCtrl($scope, $rootScope){
		$scope.title = 'Contact';
		$rootScope.curPath = 'contact';
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

;(function (){
'use strict'
angular
	.module('GymDiary.nutrition', ['ngRoute'])
	.config(NutritionConfig)
	.controller('NutritionCtrl', NutritionCtrl);

	NutritionCtrl.$inject = ['$scope', '$rootScope'];

	function NutritionCtrl($scope, $rootScope){
		$scope.title = 'Nutrition';
		$rootScope.curPath = 'nutrition';
	}

	function NutritionConfig($routeProvider){
		$routeProvider
			.when('/nutrition', {
				templateUrl: 'app/nutrition/nutrition.html',
				controller: 'NutritionCtrl'
			});
	}
})();
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
;(function (){
'use strict'
angular
	.module('GymDiary.profile', ['ngRoute'])
	.config(ProfileConfig)
	.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['$scope', '$rootScope'];

	function ProfileCtrl($scope, $rootScope){
		$scope.title = 'Profile';
		$rootScope.curPath = 'profile';
	}

	function ProfileConfig($routeProvider){
		$routeProvider
			.when('/profile', {
				templateUrl: 'app/profile/profile.html',
				controller: 'ProfileCtrl'
			});
	}
})();
;(function (){
'use strict'
angular
	.module('GymDiary.statistics', ['ngRoute'])
	.config(StatisticsConfig)
	.controller('StatisticCtrl', StatisticCtrl);

	StatisticCtrl.$inject = ['$scope', '$rootScope'];

	function StatisticCtrl($scope, $rootScope){
		$scope.title = 'Statistics';
		$rootScope.curPath = 'statistics';
	}

	function StatisticsConfig($routeProvider){
		$routeProvider
			.when('/statistics', {
				templateUrl: 'app/statistics/statistics.html',
				controller: 'StatisticCtrl'
			});
	}
})();
/**
 * Created by szaharov on 28/05/15.
 */
