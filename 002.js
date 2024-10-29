function somaParesFibonacci(limite) {
    let a = 1; 
    let b = 2; 
    let somaPares = 0; 

    while (a <= limite) {
        if (a % 2 === 0) {
            somaPares += a;
        }
      
        const proxTerm = a + b; // Calcula o próximo termo
        a = b; // Atualiza 'a' para o próximo termo
        b = proxTerm; 
    }

    return somaPares; 
}

// Limite de quatro milhões
const limite = 4000000;

const resultado = somaParesFibonacci(limite);

console.log(`A soma dos termos pares da sequência de Fibonacci até ${limite} é: ${resultado}`);
