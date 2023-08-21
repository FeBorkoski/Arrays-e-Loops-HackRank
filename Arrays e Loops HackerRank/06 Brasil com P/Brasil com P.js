

function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui

let lista = []

for (let palavra of palavras) {
    if (primeiraLetra === palavra[0] && segundaLetra === palavra[1]) {
        lista.push(palavra)
        console.log(palavra)
    }
}
if (lista.length === 0) {
    console.log('NENHUMA')
}
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});