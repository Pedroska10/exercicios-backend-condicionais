const jogada1 = "tesoura"
const jogada2 = "papel"

if (jogada1 == jogada2) {
    console.log('empate')
}

if (jogada1 === 'pedra') {
    if (jogada2 === 'tesoura') {
        console.log(`${jogada1}`)
    }
    if (jogada2 === 'papel') {
        console.log(`${jogada2}`)
    }
}
if (jogada1 === 'papel') {
    if (jogada2 === 'pedra') {
        console.log(`${jogada1}`)
    }
    if (jogada2 === 'tesoura') {
        console.log(`${jogada2}`)
    }
}
if (jogada1 === 'tesoura') {
    if (jogada2 === 'papel') {
        console.log(`${jogada1}`)
    }
    if (jogada2 === 'pedra') {
        console.log(`${jogada2}`)
    }
}
//seu código aqui