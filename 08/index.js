const idade = 17;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

console.log('Montanha russa muito assustadora')

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log('acesso negado')
} else {
    if (ehEstudante === true || idade < 18) {
        console.log('10 reais')
    } else {
        console.log('20 reais')
    }
}