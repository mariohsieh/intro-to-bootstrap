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
					case '/forms-buttons':
						return 'home.formsButtons';							
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
				"title": "Forms & Buttons",
				"state":	"home.formsButtons"
			}
/*			
			{ 
				"title": "Lists & Tables",
				"state":	"home.listsTables"
			},
			{ 
				"title": "Grid System",
				"state":	"home.gridSystem"
			},
			{ 
				"title": "Column Offsets",
				"state":	"home.columnOffsets"
			},
			{ 
				"title": "Create Webpage from Mockup",
				"state":	"home.createWebpage"
			}, 	
			{ 
				"title": "Resources",
				"state":	"home.resources"
			}
*/ 
		];
		
		$scope.changeState = function(state) {
			$scope.currentState = state;
			//console.log($scope.currentState);
		}
			
		$scope.isCurrent = function(state) {
			return $scope.currentState === state;
		}
		
		initial();
	});
