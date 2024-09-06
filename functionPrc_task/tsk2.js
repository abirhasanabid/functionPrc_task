/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function opration(num){
    if(num%2===1){
        return num*2;
    }
    else{
        return num/2;
    }

}
console.log('multi result :',opration(3))
console.log('div result :', opration(4))
