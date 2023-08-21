

function solucao(precos) {


    let compra = 0
    let venda = 0
    let prejuizo = 0
    let menorPrejuizo = precos[0];
    
    
    for (let i = 0; i < precos.length; i++) { 
        for (let j = i + 1; j < precos.length; j++) {
            compra = precos[i];
            venda = precos[j];
            prejuizo = compra - venda
    
            if (prejuizo > 0) { 
                if (prejuizo < menorPrejuizo) {
                    menorPrejuizo = prejuizo;
                }
    
            }
        }
    }
    console.log(menorPrejuizo)
    }
    
    function processData(input) {
        const precos = input.split(" ").map(x => parseInt(x));
          solucao(precos);
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