(function() {

    function quicksort(arr, key) {
        if (arr.length < 1) {
            return arr;
        }

        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var pivotValue = pivot[key];

        var left = [];
        var right = [];

        for (var i = 0; i < arr.length; i+=1) {
            var arri = arr[i];
            var arriValue = arri[key];
            if (arriValue < pivotValue) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return quicksort(keft, key).concat([pivot], quicksort(right, key));
    }

})();
