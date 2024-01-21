const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 5; //emCentavos

console.log('Isenção de impostos')
if (aposentada === true) {
    console.log('Isenta')
} else if (portadoraDeDoenca === true) {
    console.log('Isenta')
} else if (totalDeRendimentos < 2855970) {
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
} else {
    console.log('PEGA LEAO')
}