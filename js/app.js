angular.module("introToBootstrapApp", ['ui.router'])

	// config routes
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		//$locationProvider.html5Mode(true);
		
		//$urlRouterProvider.otherwise('/');
		//$urlRouterProvider
			//.when('','/home');
	
		$stateProvider
			.state('home', {
				//url: '/home/',
				templateUrl: 'views/menu.html'
				//template: '<h1>hello there</h1>'
			})
			
			.state('home.welcome', {
				templateUrl: 'views/00-welcome.html'
			})			
			.state('home.gettingStarted', {
				url: 'getting-started',
				templateUrl: 'views/01-getting-started.html'
			});
		
	})

	.controller("indexCtrl", function($scope, $state) {
		$state.go('home.welcome');
	});

