// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function findSmallest(arr){
    let smallestElement = Infinity;
    for(let i=0; i<arr.length;i++){
        if(arr[i]<smallestElement){
        smallestElement= arr[i] ;
        }
    }
    return smallestElement;
}

let arr= [2,9,17,1,10,4,8,-1];
let result = findSmallest(arr);
console.log(result);
