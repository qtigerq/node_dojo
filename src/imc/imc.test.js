import { imc } from './Imc.js';

test('Calcula peso dividido por altura ao quadrado', () => {
    expect(imc(2, 100)).toBe(25);
});
