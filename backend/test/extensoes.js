const calculaValor = require('../src/calcula-valor.js')

expect.extend({
    terSomaDeValoresIgual(items, soma) {
        let somaReal = 0

        for (let i = 0; i < items.length; i++) {
            somaReal += items[i]
        }
        const passou = calculaValor.arrendondar(somaReal) === calculaValor.arrendondar(soma)
        return {
            message: () => `A soma ${somaReal} deve ser igual a ${soma}`,
            pass: passou
        }
    },
    sejaDescrecente(itens) {
        for (let i = 0; i < itens.length - 1; i++) {
            const j = i + 1
            expect(itens[i]).toBeGreaterThanOrEqual(itens[j])
        }

        return {
            message: () => 'O array deve estar em ordem decrescente',
            pass: true
        }
    }
})
