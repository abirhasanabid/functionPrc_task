/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arrNum){

    let sum =0;
    let avg;
    let len = arrNum.length

    for(const num of intNumbers){
        sum+=num;
        avg = sum/len;
    }
    return avg;
}
const intNumbers = [2,3,4,5,6,7,8,9];

const result = make_avg(intNumbers);
console.group(result);