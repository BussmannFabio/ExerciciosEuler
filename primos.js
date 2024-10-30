const limite = 12938473;
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
        return primos;
    }

    acharOsPrimos(limite);

    console.log("Números primos:", primos);

    function maiorFator(primos, limite) {

        let target = limite;
    
        let fatores = [];
    
    
        for (let i = 0; 1 < target; i++) {

            while (target % primos[i] === 0) {
    
                fatores.push(primos[i]);
    
                target = target / primos[i];
    
            }
    
        }
    
        return fatores;
    
    }

    let fatores = maiorFator(primos, limite)
    console.log(fatores)


