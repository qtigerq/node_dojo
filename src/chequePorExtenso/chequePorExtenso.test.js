import {valorPorExtensoUnidade,
        valorPorExtensoDezena,
        valorPorExtensoCentena,
        valorPorExtenso } from './chequePorExtenso.js';

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
    expect(valorPorExtenso('11')).toBe('onze');
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
    expect(valorPorExtenso('213')).toBe('duzentos e treze');
    expect(valorPorExtenso('918')).toBe('novecentos e dezoito');
});

test('Dado valor de 4 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('1000')).toBe('um mil');
    expect(valorPorExtenso('8000')).toBe('oito mil');
    expect(valorPorExtenso('8114')).toBe('oito mil cento e quatorze');
    expect(valorPorExtenso('4200')).toBe('quatro mil e duzentos');
    expect(valorPorExtenso('5001')).toBe('cinco mil e um');
    expect(valorPorExtenso('7030')).toBe('sete mil e trinta');
    expect(valorPorExtenso('3100')).toBe('três mil e cem');
    expect(valorPorExtenso('2222')).toBe('dois mil duzentos e vinte e dois');
    expect(valorPorExtenso('9010')).toBe('nove mil e dez');
    expect(valorPorExtenso('5017')).toBe('cinco mil e dezessete');
});

test('Dado valor de 5 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('10000')).toBe('dez mil');
    expect(valorPorExtenso('20001')).toBe('vinte mil e um');
    expect(valorPorExtenso('30010')).toBe('trinta mil e dez');
    expect(valorPorExtenso('40015')).toBe('quarenta mil e quinze');
    expect(valorPorExtenso('80116')).toBe('oitenta mil cento e dezesseis');
    expect(valorPorExtenso('50100')).toBe('cinquenta mil e cem');
    expect(valorPorExtenso('50121')).toBe('cinquenta mil cento e vinte e um');
    expect(valorPorExtenso('60200')).toBe('sessenta mil e duzentos');
    expect(valorPorExtenso('70301')).toBe('setenta mil trezentos e um');
    expect(valorPorExtenso('80410')).toBe('oitenta mil quatrocentos e dez');
    expect(valorPorExtenso('91000')).toBe('noventa e um mil');
    expect(valorPorExtenso('35020')).toBe('trinta e cinco mil e vinte');
    expect(valorPorExtenso('23001')).toBe('vinte e três mil e um');
    expect(valorPorExtenso('50050')).toBe('cinquenta mil e cinquenta');
    expect(valorPorExtenso('92000')).toBe('noventa e dois mil');
    expect(valorPorExtenso('27178')).toBe('vinte e sete mil cento e setenta e oito');
});

test('Dado valor de 6 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('100000')).toBe('cem mil');
    expect(valorPorExtenso('100018')).toBe('cem mil e dezoito');
    expect(valorPorExtenso('200001')).toBe('duzentos mil e um');
    expect(valorPorExtenso('300010')).toBe('trezentos mil e dez');
    expect(valorPorExtenso('400100')).toBe('quatrocentos mil e cem');
    expect(valorPorExtenso('500017')).toBe('quinhentos mil e dezessete');
    expect(valorPorExtenso('600020')).toBe('seiscentos mil e vinte');
    expect(valorPorExtenso('700200')).toBe('setecentos mil e duzentos');
    expect(valorPorExtenso('800301')).toBe('oitocentos mil trezentos e um');
    expect(valorPorExtenso('900610')).toBe('novecentos mil seiscentos e dez');
    expect(valorPorExtenso('100719')).toBe('cem mil setecentos e dezenove');
    expect(valorPorExtenso('201000')).toBe('duzentos e um mil');
    expect(valorPorExtenso('300100')).toBe('trezentos mil e cem');
    expect(valorPorExtenso('420000')).toBe('quatrocentos e vinte mil');
    expect(valorPorExtenso('520001')).toBe('quinhentos e vinte mil e um');
    expect(valorPorExtenso('663201')).toBe('seiscentos e sessenta e três mil duzentos e um');
});

test('Dado valor de 7 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('6278291')).toBe('seis milhões duzentos e setenta e oito mil duzentos e noventa e um');
});

test('Dado valor de 8 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('27893029')).toBe('vinte e sete milhões oitocentos e noventa e três mil e vinte e nove');
});

test('Dado valor de 9 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('267382901')).toBe('duzentos e sessenta e sete milhões trezentos e oitenta e dois mil novecentos e um');
});

test('Dado valor de 10 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('7283928391')).toBe('sete bilhões duzentos e oitenta e três milhões novecentos e vinte e oito mil trezentos e noventa e um');
});

test('Dado valor de 11 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('90293829102')).toBe('noventa bilhões duzentos e noventa e três milhões oitocentos e vinte e nove mil cento e dois');
});

test('Dado valor de 12 algarismos, retorna escrito por extenso', () => {
    expect(valorPorExtenso('927386251631')).toBe('novecentos e vinte e sete bilhões trezentos e oitenta e seis milhões duzentos e cinquenta e um mil seiscentos e trinta e um');
});