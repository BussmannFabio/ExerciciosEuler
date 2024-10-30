const limite = 1000000;
let primos = [];

function acharOsPrimos(limite) {

    let numeros = new Array(limite).fill(true);
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

function maiorFator(primos, limite){
const fatores = primos.filter(num =>limite%num === 0 );
return fatores.length > 0 ? Math.max(...fatores)
}

const maiorfat = maiorFator(primos, limite);
console.log(`O maior fator primo de ${limite} é ${maiorfat}`);

