const limite = 1000000;

let numeros = new Array(limite).fill(true);

let primos = [];

function acharOsPrimos(limite) {
    
    numeros[0] = false;
    numeros[1] = false;
    
    
    for (let i=2; i*i < limite; i++) { 
    
        if (numeros[i]) {
    
            for (let j = i*i; j<limite ; j += i) {
    
                numeros[j] = false;
    
            }
        } 
    }
        let i=2;
    
        while (i < limite) {
    
            if (numeros[i]) {
    
                primos.push(i);
            }
    
            i++;
        }
    }
acharOsPrimos(limite);

console.log("Números primos:", primos);
