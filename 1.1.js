function factorial(n){
    let sum=1;
    for(let i=1;i<=n;i++){
        sum*=i;
    }
    return sum;
}
const number = 5;
const result = factorial(number);
console.log(result);