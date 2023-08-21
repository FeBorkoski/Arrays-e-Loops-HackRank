


function solucao(notas) {
	//seu codigo aqui
    let maior = 0;
let menor = 0;
let calc = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notas[maior]) {
        maior = i
    } else if (notas[i] < notas[menor]) {
        menor = i
    }
}

let primeiroIndiceRemover = Math.min(menor, maior);
let segundoIndiceRemover = Math.max(menor, maior);


notas.splice(segundoIndiceRemover, 1);
notas.splice(primeiroIndiceRemover, 1);

for (let calculo of notas) {
    calc += calculo
}

console.log(calc / notas.length);
   
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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