

function solucao(sequencia) {
	//seu codigo aqui


let contagem = 0;

for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] === '>') {
        contagem++
        if (contagem > 6) {
            contagem = 0;
        }
    } else {
        contagem--
        if (contagem < 0) {
            contagem = 6;
        }
    }
}
console.log(contagem)
}

function processData(input) {
    solucao(input);
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
