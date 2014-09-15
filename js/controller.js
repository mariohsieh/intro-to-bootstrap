angular.module("allControllers", [])

	.controller("indexCtrl", function($scope, $state, $location) {
		
		function initial() {
			function getState(addy) {
				//console.log(addy);
				switch(addy) {
					case '':
					case '/':
						return 'home.welcome';
					case '/getting-started':
						return 'home.gettingStarted';
					case '/bootstrap-basics':
						return 'home.bootstrapBasics';
					case '/form-elements':
						return 'home.formElements';	
					case '/tables':
						return 'home.tables';													
					case '/grid-system':
						return 'home.gridSystem';
					case '/create-webpage':
						return 'home.createWebpage';						
/*							
					case '/header-content':
						return 'home.headerContent';
*/ 
					case '/resources':
						return 'home.resources';							
					default:
						return addy;
				}
			}
			
			$scope.currentState = getState($location.path());
		}

		//$state.go('home.welcome');

		// array to hold links
		$scope.menus = [
			{
				"title": "Intro to Bootstrap",
				"state":	"home.welcome"
			},
			{ 
				"title": "Getting Started",
				"state":	"home.gettingStarted"
			},
			{ 
				"title": "Bootstrap Basics",
				"state":	"home.bootstrapBasics"
			},			
			{ 
				"title": "Form Elements",
				"state":	"home.formElements"
			},
			{ 
				"title": "Tables",
				"state":	"home.tables"
			},			
			{ 
				"title": "Grid System",
				"state":	"home.gridSystem"
			},
			{ 
				"title": "Create Webpage",
				"state":	"home.createWebpage"
			},
/*			
			{ 
				"title": "Header Content",
				"state":	"home.headerContent"
			}, 			
*/ 
			{ 
				"title": "Resources",
				"state":	"home.resources"
			}
		];
		
		$scope.changeState = function(state) {
			$scope.currentState = state;
			//console.log($scope.currentState);
			window.scrollTo(0,0);
		}
			
		$scope.isCurrent = function(state) {
			return $scope.currentState === state;
		}
		
		initial();
	});
