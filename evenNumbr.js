

function evenNumbers(number) {
    // let newArr = [];
    let sum = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number;
            // newArr.push(number);
        }
    }
    // return newArr;
    return sum;

}
const numbers = [2, 3, 5, 7, 945, 4, 6, 78];
const result = evenNumbers(numbers);
// console.log('array of even numbers :', result);
console.log('sum even numbers :', result);

