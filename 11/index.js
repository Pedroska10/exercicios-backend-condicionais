//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 500000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000;

const valorParcela = (rendaMensalEmCentavos * 0.18) / 100

if (mesesDecorridos > 60 || rendaMensalEmCentavos < 200000 || totalJaPagoPeloAluno >= 1800000) {
    console.log('O total a pagar é de R$ 0')
    if (mesesDecorridos > 60) {
        console.log('Pois tempo decorrido foi excedido')
    } else if (rendaMensalEmCentavos < 200000) {
        console.log('Pois a renda média do estudante está abaixo do valor mínimo de R$ 2000,00')
    } else if (totalJaPagoPeloAluno >= 1800000) {
        console.log('O alunos não deve pagar mais nada, pois ja quitou a dívida')
    }
} else {
    console.log('O valor da parcela desse mês é de R$ ' + valorParcela.toFixed(2))
}