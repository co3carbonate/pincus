// rotation
(function(){
	// variables
	var rotations = [-90, 90, 180, 360];

	// executed operation
	operations[1] = function() {
		var rotation = random_arr(rotations);

		// animate
		pincus.animate({
			rotate: rotation + 'deg'
		}, random_int(1000, 4000), random_arr(easings), callback);
	}
})();