import { imprime } from './fizzBuzz.js';

test('Imprime numero 1', () => {
    expect(imprime(1)).toBe('1');
});

test('Imprime Fizz', () => {
    expect(imprime(3)).toBe('Fizz');
});

test('Imprime Buzz', () => {
    expect(imprime(5)).toBe('Buzz');
});

test('Imprime FizzBuzz', () => {
    expect(imprime(15)).toBe('FizzBuzz');
});