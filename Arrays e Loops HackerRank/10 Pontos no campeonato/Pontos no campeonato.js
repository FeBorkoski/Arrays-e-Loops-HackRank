

function solucao(resultados) {
	//seu codigo aqui
    let pontuacao = 0;

for ( let placar of resultados){
    if ( placar === 'V') {
        pontuacao += 3
    } else if ( placar === 'E') {
        pontuacao++
    }
}

console.log(pontuacao)

}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
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