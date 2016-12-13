// scale
(function(){
	// variables
	
	// executed operation
	operations[3] = function() {
		var scale = random_int(0.8, 4);

		// animate
		pincus.animate({
			scale: scale
		}, random_int(1000, 4000), random_arr(easings), callback);
	}
})();