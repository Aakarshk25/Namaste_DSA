// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function findLargest(arr){
    let largestElement = -Infinity;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>largestElement){
        largestElement= arr[i] ;
        }
    }
    return largestElement;
}

let arr= [2,9,17,0,1,10,4,8,-1];
let result = findLargest(arr);
console.log(result);
