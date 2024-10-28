function somaMultiplos() {
    let soma = 0;
    for (let i = 0; i < 1000; i++) { 
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

function mostrarResultado() {
    const resultado = somaMultiplos();
    document.getElementById("resultado").textContent = "A soma é: " + resultado;
}