angular.module("introToBootstrapApp", [

	'ui.router',
	'allControllers',
	'allDirectives'
	
	])

	// config routes
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		//$locationProvider.html5Mode(true);
		
		$urlRouterProvider.otherwise('/');
	
		$stateProvider
			.state('home', {
				templateUrl: 'views/menu.html'
			})
			.state('home.welcome', {
				url: '/',
				templateUrl: 'views/00-welcome.html'
			})			
			.state('home.gettingStarted', {
				url: '/getting-started',
				templateUrl: 'views/01-getting-started.html'
			});
			
	});
	
