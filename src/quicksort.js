(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['quicksort'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS
        module.exports = factory(require('quicksort'));
    } else {
        root.returnExports = factory(root.quicksort);
    }
}(this, function(window) {

    'use strict';

    function quicksort(arr) {
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
    }

    return quicksort;
}));
