/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-08 10:41:02
 * @version $Id$
 */

define(function (require, exports, module) {
	var common = require('common.js');

	function quicksort(arr){
		if (arr.length < 1) {
	        return arr;
	    }

	    var pivotIndex = Math.floor(arr.length / 2);
	    var pivot = arr.splice(pivotIndex, 1)[0];

	    var left = [];
	    var right = [];

	    for (var i = 0; i < arr.length; i+=1) {
	        var arri = arr[i];
	        if (arri < pivot) {
	            left.push(arr[i]);
	        } else {
	            right.push(arr[i]);
	        }
	    }

	    return quicksort(left).concat([pivot], quicksort(right));
	};

	var a = 100, b = 12;
	console.log(common.add(a, b));

	// 输出函数
	// exports.quicksort = quicksort;

	// 输出json
	module.exports = {
		quicksort : quicksort
	}
});