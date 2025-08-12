// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function countNegative(arr){
    let v=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]<0){
         v=v+1;
        }
    }
    return v;
}

let arr= [2,9,17,0,1,10,4,8,-1];
let result = countNegative(arr);
console.log(result);
