let array = [2,3,10,4,1,5,6,2,4,5,6,2];

function average(array){
    let sumav=0;
    let average=0;
    for(let i = 0;i < array.length;i++){
        sumav += array[i];
    }
    average = sumav / array.length;
    return average;
}
let resaverage = average(array);
console.log(resaverage);
//sum of an array
function findSum(array){
    let sum=0;
    for(let i = 0;i < array.length; i++){
        sum+=array[i];
    }
    return sum;
}
let resultsum = findSum(array);
console.log(resultsum);

function max(array){
    let max = array[0];
    for(let i=1;i<array.length;i++){
        if(array[i] > max)
        max = array[i];
    }
    return max;
}
console.log(max(array));

function min(array){
    let min = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i]<min){
            min = array[i]
        }
    }
    return min;
}
console.log(min(array))