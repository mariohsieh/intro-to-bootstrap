angular.module("introToBootstrapApp", [
	// dependency injection
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
			})			
			.state('home.bootstrapBasics', {
				url: '/bootstrap-basics',
				templateUrl: 'views/02-bootstrap-basics.html'
			})
			.state('home.buttonsInputsForms', {
				url: '/buttons-inputs-forms',
				templateUrl: 'views/03-buttons-inputs-forms.html'
			})
			.state('home.listsTables', {
				url: '/getting-started',
				templateUrl: 'views/04-lists-tables.html'
			})			
			.state('home.gridSystem', {
				url: '/grid-system',
				templateUrl: 'views/05-grid-system.html'
			})
			.state('home.createWebpage', {
				url: '/create-webpage',
				templateUrl: 'views/06-create-webpage.html'
			})			
			.state('home.resources', {
				url: '/resources',
				templateUrl: 'views/07-resources.html'
			});
			
	});
	
