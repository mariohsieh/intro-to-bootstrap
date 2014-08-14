angular.module("allDirectives", [])

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
