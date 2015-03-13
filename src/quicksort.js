(function(window) {

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

})(this);
