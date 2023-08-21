function solucao(stringCorrompida) {
    // Função que recebe uma string corrompida e a purifica removendo caracteres especiais.

    let purificado = ""; // Inicializa uma string vazia para armazenar a string purificada.

    for (let carac of stringCorrompida) { // Itera sobre cada caractere na string corrompida.
        if (carac === "!" || carac === "@" || carac === "#" || carac === "$" || carac === "%" || carac === "&" || carac === "*" || carac === "(" || carac === ")" || carac === ".") {
            // Verifica se o caractere atual é um dos caracteres especiais listados.
            // Caso seja, ele não é adicionado à string purificada (ignorado).
        } else {
            purificado += carac; // Caso contrário, o caractere é adicionado à string purificada.
        }
    }

    console.log(purificado); // Exibe a string purificada no console.
}

function processData(input) {
    solucao(input); // Chama a função solucao para processar a entrada.
}

process.stdin.resume(); // Inicia a leitura da entrada padrão.
process.stdin.setEncoding("ascii"); // Define a codificação da entrada.

_input = ""; // Inicializa uma variável para armazenar a entrada.

process.stdin.on("data", function (input) {
    _input += input; // Concatena a entrada à variável _input conforme ela é recebida.
});

process.stdin.on("end", function () {
    processData(_input); // Quando a entrada terminar de ser lida, chama a função processData para processá-la.
});
