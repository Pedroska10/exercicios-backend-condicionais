const alturaEmCm = 206;

if (alturaEmCm > 180) {
    console.log('Aprovado')
    if (alturaEmCm <= 185) {
        console.log('Seu teste será realizado como LÍBERO')
    } else if (alturaEmCm > 185 && alturaEmCm <= 195) {
        console.log('Seu teste será realizado como PONTEIRO')
    } else if (alturaEmCm > 195 && alturaEmCm <= 205) {
        console.log('Seu teste será realizado como OPOSTO')
    } else if (alturaEmCm > 205) {
        console.log('Seu teste será realizado como CENTRAL')
    }
} else {
    console.log('Reprovado')
}
