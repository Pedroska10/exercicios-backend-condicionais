const primeiroNome = "Mario";
const sobrenome = "sergio";
const apelido = "";

if (primeiroNome) {
    if (apelido) {
        console.log(apelido)
    } else if (sobrenome) {
        console.log(primeiroNome + " " + sobrenome)
    } else {
        console.log(primeiroNome)
    }
}