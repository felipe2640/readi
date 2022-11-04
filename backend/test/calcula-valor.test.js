const calculaValor = require('../src/calcula-valor.js')
require('./extensoes.js')

describe('Calcula montante', () => {
    test('Com uma prestação o montante é igual ao capital', () => {
        // Operação
        const montante = calculaValor.calcularMontante(100, 0.0175, 1)

        // Resultado ou Comportamento esperado
        expect(montante).toBe(100)
    })

    test('Com 4 prestações o montante é acrescido de juros com arrendondamento do Jest', () => {
        // Operação
        const montante = calculaValor.calcularMontante(500, 0.025, 4)

        // Resultado ou Comportamento esperado
        expect(montante).toBeCloseTo(538.45) // Ele cria o arrendondamento do valor usando Jest
    })

    test('Com 4 prestações o montante é acrescido de juros', () => {
        // Operação
        const montante = calculaValor.calcularMontante(500, 0.025, 4)

        // Resultado ou Comportamento esperado
        expect(montante).toBeCloseTo(538.45) // Ele cria o arrendondamento do valor usando Jest
    })
})

describe('arredondar', () => {
    test('Arredondar em duas casas decimais', () => {
        const resultado = calculaValor.arrendondar(538.4453124999998)
        expect(resultado).toBe(538.45)
    })
    test('1.005 deve retornar 1.01', () => {
        const resultado = calculaValor.arrendondar(1.005)
        expect(resultado).toBe(1.01)
    })
    test('Arredondar uma casas decimais', () => {
        const resultado = calculaValor.arrendondar(538.4)
        expect(resultado).toBe(538.40)
    })
    test('Arredondar quando o valor não tiver casas decimais', () => {
        const resultado = calculaValor.arrendondar(538)
        expect(resultado).toBe(538.00)
    })
})

describe('calcularPrestacoes', () => {
    test('O número de parcelas é igual ao numero de prestações', () => {
        // Premissas
        const numeroPrestacoes = 6

        // Operação
        const prestacoes = calculaValor.calcularPrestacoes(200, numeroPrestacoes)

        // Resultado esperado
        expect(prestacoes.length).toBe(numeroPrestacoes)
    })
    test('Uma única prestação, valor igual ao montante', () => {
        // Premissas
        const numeroPrestacoes = 1

        // Operação
        const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

        // Resultado esperado
        expect(prestacoes.length).toBe(numeroPrestacoes)
        expect(prestacoes[0]).toBe(50)
    })
    test('Duas prestações, valor igual a metade montante', () => {
        // Premissas
        const numeroPrestacoes = 2

        // Operação
        const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

        // Resultado esperado
        expect(prestacoes.length).toBe(numeroPrestacoes)
        expect(prestacoes[0]).toBe(25)
        expect(prestacoes[1]).toBe(25)
    })

    test('Montante com duas casas decimais deve ser igual a soma das prestações e as prestações devem ser maior ou igual a prestações seguintes', () => {
        // Dado (given)
        const numeroPrestacoes = 3
        const montante = 100

        // Quando (when)

        const prestacoes = calculaValor.calcularPrestacoes(montante, numeroPrestacoes)

        // Então (then)

        expect(prestacoes.length).toBe(numeroPrestacoes)
        expect(prestacoes).terSomaDeValoresIgual(montante)

        // Sem Extend
        // const soma = calculaValor.arrendondar(prestacoes[0] + prestacoes[1] + prestacoes[2])
        // expect(soma).toBe(montante)
        // for (let i = 0; i < prestacoes.length - 1; i++) {
        //     const j = i + 1
        //     expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j])
        // }

        expect(prestacoes).sejaDescrecente()
    })
    test('Montante com tres casas decimais deve ser igual a soma das prestações e as prestações devem ser maior ou igual a prestações seguintes', () => {
        // Dado (given)
        const numeroPrestacoes = 3
        const montante = 101.994

        // Quando (when)

        const prestacoes = calculaValor.calcularPrestacoes(montante, numeroPrestacoes)

        // Então (then)

        expect(prestacoes.length).toBe(numeroPrestacoes)

        expect(prestacoes).terSomaDeValoresIgual(montante)

        expect(prestacoes).sejaDescrecente()
    })
})
