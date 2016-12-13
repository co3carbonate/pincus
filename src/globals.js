// Globals
// functions
function random_int(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random_arr(arr) {
	return arr[random_int(0, arr.length - 1)];
}

// variables
var pincus = $('.pincus');
var operations = {};

// constants
var easings = ['swing','easeInQuad','easeOutQuad','easeInOutQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeInQuart','easeOutQuart','easeInOutQuart','easeInQuint','easeOutQuint','easeInOutQuint','easeInSine','easeOutSine','easeInOutSine','easeInExpo','easeOutExpo','easeInOutExpo','easeInCirc','easeOutCirc','easeInOutCirc','easeInElastic','easeOutElastic','easeInOutElastic','easeInBack','easeOutBack','easeInOutBack','easeInBounce','easeOutBounce','easeInOutBounce'];
