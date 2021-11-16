import { jokenPo } from './jokenPo';

test('Jogador 1 pedra, jogador2 papel', () => {
    expect(jokenPo('pedra', 'papel')).toBe('jogador 2');
});

test('Jogadas iguais', () => {
    expect(jokenPo('pedra', 'pedra')).toBe('empate');
});

test('Jogador 1 pedra, jogador2 tesoura', () => {
    expect(jokenPo('pedra', 'tesoura')).toBe('jogador 1');
});

test('Jogador 1 tesoura, jogador2 papel', () => {
    expect(jokenPo('tesoura', 'papel')).toBe('jogador 1');
});