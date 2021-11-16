import { exponencial } from './Exponencial.js';

test('eleva A ao exponencial B', () => {
    expect(exponencial(2, 2)).toBe(4);
});

test('eleva A ao exponencial B com B nulo', () => {
    expect(exponencial(2, 0)).toBe(1);
});