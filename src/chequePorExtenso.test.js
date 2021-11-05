import { valorPorExtensoUnidade, valorPorExtensoDezena, valorPorExtensoCentena, valorPorExtenso } from './chequePorExtenso.js';

test('Dado numero em unidade entre 0-9 escreve por extenso', () => {
    expect(valorPorExtensoUnidade('0', 0)).toBe('zero');    
    expect(valorPorExtensoUnidade('1', 0)).toBe('um');
    expect(valorPorExtensoUnidade('5', 0)).toBe('cinco');
    expect(valorPorExtensoUnidade('9', 0)).toBe('nove');
});

test('Dado numero em dezena entre 11-19, ou os que terminam em zero, escreve por extenso', () => {
    expect(valorPorExtensoDezena('10', 0)).toBe('dez');
    expect(valorPorExtensoDezena('12', 0)).toBe('doze');
    expect(valorPorExtensoDezena('19', 0)).toBe('dezenove');
    expect(valorPorExtensoDezena('20', 0)).toBe('vinte');
    expect(valorPorExtensoDezena('50', 0)).toBe('cinquenta');
    expect(valorPorExtensoDezena('90', 0)).toBe('noventa');
});

test('Dado numero em centena que termina com 00 escreve por extenso. Testa o CENTO também', () => {
    expect(valorPorExtensoCentena('100', 0)).toBe('cem');
    expect(valorPorExtensoCentena('200', 0)).toBe('duzentos');
    expect(valorPorExtensoCentena('1', 0)).toBe('cento');
});

test('Dado valor de 1 algarismo, retorna escrito por extenso', () => {
    expect(valorPorExtenso('0')).toBe('zero');
    expect(valorPorExtenso('1')).toBe('um');
    expect(valorPorExtenso('3')).toBe('três');
    expect(valorPorExtenso('9')).toBe('nove');
});

test('Dado valor de 2 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('10')).toBe('dez');
    expect(valorPorExtenso('20')).toBe('vinte');
    expect(valorPorExtenso('15')).toBe('quinze');
    expect(valorPorExtenso('37')).toBe('trinta e sete');
});

test('Dado valor de 3 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('100')).toBe('cem');
    expect(valorPorExtenso('101')).toBe('cento e um');
    expect(valorPorExtenso('300')).toBe('trezentos');
    expect(valorPorExtenso('550')).toBe('quinhentos e cinquenta');
    expect(valorPorExtenso('610')).toBe('seiscentos e dez');
    expect(valorPorExtenso('918')).toBe('novecentos e dezoito');
});

test('Dado valor de 4 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('1000')).toBe('um mil');
    expect(valorPorExtenso('8000')).toBe('oito mil');
    expect(valorPorExtenso('4200')).toBe('quatro mil e duzentos');
    expect(valorPorExtenso('5001')).toBe('cinco mil e um');
    expect(valorPorExtenso('7030')).toBe('sete mil e trinta');
    expect(valorPorExtenso('3100')).toBe('três mil e cem');
    expect(valorPorExtenso('2222')).toBe('dois mil duzentos e vinte e dois');
    expect(valorPorExtenso('9010')).toBe('nove mil e dez');
    expect(valorPorExtenso('5017')).toBe('cinco mil e dezessete');
});

test('Dado valor de 4 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('1000')).toBe('um mil');
});

test('Dado valor de 4 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('1000')).toBe('um mil');
});

test('Dado valor de 4 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('1000')).toBe('um mil');
});