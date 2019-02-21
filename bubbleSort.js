// Bubble Sort
// Runs through two at a time, if the first number is less than the secend number then they swap, otherwise nothing happens.

array = [1989, 1991, 11, 8, 19, 5];

function bubbleSort(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j +1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSort(array));
