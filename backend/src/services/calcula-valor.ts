function calcularMontante(capital, taxa, periodo) {
    let montante = capital * Math.pow((1 + taxa), periodo - 1)
    montante = arrendondar(montante)
    return montante
}

function arrendondar(valor) {
    return Math.round((valor + Number.EPSILON) * 100) / 100
}

function calcularPrestacoes(montante, numeroPrestacoes) {
    let somaPrestacoes = 0
    const prestacaoBase = arrendondar(montante / numeroPrestacoes)
    const resultado = Array(numeroPrestacoes).fill(prestacaoBase)

    for (let i = 0; i < resultado.length; i++) {
        somaPrestacoes += resultado[i]
    }
    if (montante === somaPrestacoes) {
        return resultado
    } else {
        const resto = montante - somaPrestacoes
        const j = resto > 0 ? 0 : resultado.length - 1
        resultado[j] = resultado[j] + arrendondar(resto)

        return resultado
    }
}

module.exports = {
    calcularMontante,
    arrendondar,
    calcularPrestacoes
}
