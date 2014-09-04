angular.module("allDirectives", [])

	// click event for example images
	.directive("imgClick", function() {
		
		function link(scope, elem, attr) {
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
		
		return {
			restrict: 'A',
			replace: false,
			link: link
		}
	})

	// example table that gets re-used in the tables lesson
	.directive("exampleTable", function() {
		
		function link(scope, elem, attr) {
				//console.log(elem);
				if (attr.colors) {
					//console.log(attr.colors);
					
					scope.colors = attr.colors.split(" ");
					//scope.colors = attr.colors;
					console.log(scope.colors);
				}			
		}
		
		return {
			restrict: 'E',
			replace: true,
			scope: {
				color1: '@',
				color2: '@',
				color3: '@'
			}, 
			//link: link,			
			templateUrl: 'views/exampleTable.html'
		}		
	});
