/**
 * globe js
**/
(function ( window, angular, undefined ) {
	var globe = angular.module('globe', []);
	
	globe.provider('g', function(){
		
		this.$get = [function(){
			var config = {};
		
			config.server = 'http://localhost:9000/';
			
			return config;
		}];
	});
	
})( window, window.angular);

