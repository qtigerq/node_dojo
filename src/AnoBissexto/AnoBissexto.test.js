import { anoBissexto } from './AnoBissexto.js';

test('Verifica se é bissexto', () => {
    expect(anoBissexto(2000)).toBe("bissexto");
    expect(anoBissexto(1600)).toBe("bissexto");
    expect(anoBissexto(1732)).toBe("bissexto");
    expect(anoBissexto(1888)).toBe("bissexto");
    expect(anoBissexto(1944)).toBe("bissexto");
    expect(anoBissexto(2008)).toBe("bissexto");
});

test('Verifica se não é bissexto', () => {
    expect(anoBissexto(1742)).toBe("não é bissexto");
    expect(anoBissexto(1889)).toBe("não é bissexto");
    expect(anoBissexto(1951)).toBe("não é bissexto");
    expect(anoBissexto(2011)).toBe("não é bissexto");
});