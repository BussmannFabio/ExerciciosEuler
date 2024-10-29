function somaMultiplos() {
    let soma = 0;
    for (let i = 0; i < 1000; i++) { 
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

const resultado = somaMultiplos();
console.log(`A soma e ${resultado}.`)
