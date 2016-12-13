// movement
(function(){
	// variables

	// executed operation
	operations[2] = function() {
		var newLeft = random_int(0, $(window).width()) + 'px';
		var newTop = random_int(0, $(window).height()) + 'px';

		// animate
		pincus.animate({
			left: newLeft,
			top: newTop
		}, random_int(1000, 4000), random_arr(easings), callback);
	}
})();