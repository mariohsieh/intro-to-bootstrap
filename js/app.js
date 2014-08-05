angular.module("introToBootstrapApp", ['ui.router'])

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
	})

	.controller("indexCtrl", function($scope, $state) {
		
		function initial() {
			$scope.currentState = 'home.welcome';
		}

		//$state.go('home.welcome');

		// array to hold links
		$scope.menus = [
			{ "title": "Intro to Bootstrap",
				"state":	"home.welcome"
			},
			{ "title": "Getting Started",
				"state":	"home.gettingStarted"
			}
/*			
			{ "title": "Bootstrap Basics",
				"state":	"home.bootstrapBasics"
			},
			{ "title": "Forms & Buttons",
				"state":	"home.formsButtons"
			},
			{ "title": "Lists & Tables",
				"state":	"home.listsTables"
			},
			{ "title": "Grid System",
				"state":	"home.gridSystem"
			},			
			{ "title": "Resources",
				"state":	"home.resources"
			}
*/ 
		];
		
		$scope.changeState = function(state) {
			$scope.currentState = state;
		}
		
		$scope.isCurrent = function(state) {
			return $scope.currentState === state;
		}
		
		initial();
	})
	
	.directive("imgClick", function() {
		return {
			restrict: 'A',
			replace: false,
			link: function(scope, elem, attr) {
				elem.bind('click', function() {
					var overlay = document.getElementById('overlayBG');
					if (elem.hasClass('imgSelected') == true) {
							elem.removeClass('imgSelected');
							overlay.style.display = 'none';
							//console.log(elem);
					} else {
						elem.addClass('imgSelected');
						overlay.style.display = 'block';
					}
				});
			}
		}
	});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

