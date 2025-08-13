// Find Second largest number in a array


function secondLargest(arr) {
    firstLargest = -Infinity;
    secondLargest = -Infinity;

    for (i = 0; i < arr.length; i++){
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }  
        else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let arr = [4, 9, 0, 2, 8, 7, 1];

let result = secondLargest(arr);
//console.log(result)

