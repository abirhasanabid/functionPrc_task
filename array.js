

function arr(numbers) {
    let sum = 0;

    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

const numbers = [12, 3, 56, 89, 3, 6, 8, 7, 743];
const result = arr(numbers);

console.log('sum of numbers', result);
