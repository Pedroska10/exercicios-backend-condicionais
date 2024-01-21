//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === 'credito') {
    let valorFinalProduto = valorDoProduto / 100 - (valorDoProduto * 0.05) / 100
    console.log(`O valor final a ser pago é de R$${valorFinalProduto.toFixed(2)}`)
} else if (tipoDePagamento === 'cheque') {
    let valorFinalProduto = valorDoProduto / 100 - (valorDoProduto * 0.03) / 100
    console.log(`O valor final a ser pago é de R$${valorFinalProduto.toFixed(2)}`)
} else if (tipoDePagamento === 'débito' || tipoDePagamento === 'dinheiro') {
    let valorFinalProduto = valorDoProduto / 100 - (valorDoProduto * 0.10) / 100
    console.log(`O valor final a ser pago é de R$${valorFinalProduto.toFixed(2)}`)
}