const isFizz = number => number % 3 == 0;
const isBuzz = number => number % 5 == 0;

const imprime = (number) => {
    if ((isFizz(number)) && (isBuzz(number))){
        return 'FizzBuzz';
    } else if (isFizz(number)) {
        return 'Fizz';
    } else if (isBuzz(number)) {
        return 'Buzz';
    } else {
        return '' + number;
    }
}

export { imprime };