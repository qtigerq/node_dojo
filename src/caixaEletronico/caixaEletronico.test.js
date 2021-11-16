import { saque } from './caixaEletronico.js';


test('Verifica se ao sacar 100, entrega uma nota de 100', () => {
    const resultado = saque(100);
    expect(resultado).toBeDefined();            //verifica se o array tem algum valor
    expect(resultado.length).toBe(1);           //verifica se tem apenas um 
    expect(resultado[0]).toBe(100);
});

test('Verifica se ao sacar 50, entrega uma nota de 50', () => {
    const resultado = saque(50);
    expect(resultado).toBeDefined();            //verifica se o array tem algum valor
    expect(resultado.length).toBe(1);           //verifica se tem apenas um 
    expect(resultado[0]).toBe(50);
});

test('Verifica se ao sacar 20, entrega uma nota de 20', () => {
    const resultado = saque(20);
    expect(resultado).toBeDefined();            //verifica se o array tem algum valor
    expect(resultado.length).toBe(1);           //verifica se tem apenas um 
    expect(resultado[0]).toBe(20);
});

test('Verifica se ao sacar 10, entrega uma nota de 10', () => {
    const resultado = saque(10);
    expect(resultado).toBeDefined();            //verifica se o array tem algum valor
    expect(resultado.length).toBe(1);           //verifica se tem apenas um 
    expect(resultado[0]).toBe(10);
});

test('Verifica se ao sacar 150, entrega duas notas: uma de 100 outra de 50', () => {
    const resultado = saque(150);
    expect(resultado).toBeDefined();            //verifica se o array tem algum valor
    expect(resultado.length).toBe(2);           //verifica se tem apenas um 
    expect(resultado[0]).toBe(100);
    expect(resultado[1]).toBe(50);
});

test('Verifica se ao sacar 500, entrega uma nota de 500', () => {
    const resultado = saque(500);
    expect(resultado).toBeDefined();            //verifica se o array tem algum valor
    expect(resultado.length).toBe(5);           //verifica se tem apenas um 
    expect(resultado[0]).toBe(100);
    expect(resultado[1]).toBe(100);
    expect(resultado[2]).toBe(100);
    expect(resultado[3]).toBe(100);
    expect(resultado[4]).toBe(100);
});