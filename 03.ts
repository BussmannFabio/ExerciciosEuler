function euler003() {

    var i: number= 2;

    var limite: number = 600851475143;


    while (limite > i) {

        if (limite % i == 0) {

            limite = limite / i;

        } else {

            i++; 

        }

    }
    
    return i;
}

const maiorFator = euler003();

console.log(`O maior fator primo é: ${maiorFator}`);



/*const limite: number =  21340923;
let primos: number[] = [];

function acharosPrimos(limite){

    let numeros: boolean[] = new Array(limite).fill(true);
    numeros[0]= false;
    numeros[1]= false;

    for(let i: number = 2;i*i<limite;i++){
        
    //VERIFICA SE O NUMERO É TRUE NO ARRAY
        if(numeros[i]){
    //COMEÇAMOS A VERIFICAR APÓS O QUADRADO DE i, UMA VEZ QUE OS TERMOS ANTERIORES JA FORAM MARCADOS COMO FALSE NAS VERIFICAÇÕES ANTERIORES
            let j:number = i*i;
        
            while(j<limite){

                numeros[j] = false;
                j = j+i;

            }

        }

    }

         for(let i:number = 2 ; i < limite; i++){

            if(numeros[i]){

                primos.push(i);

            }
         }
    return primos;
}

const primos: any = acharosPrimos(limite);



function maiorFator(primos, limite){

    let fatores: number[] = [];
    
    let target: number = limite;
    
    for(let i: number = 0; i < primos.length;i++){

        while(target % primos[i]== 0){

            fatores.push(primos[i]);

            target = target/primos[i];
        }
    }
    return fatores;
}

let fatores: any = maiorFator(primos, limite);

console.log(`Os numeros primos são:${primos}`)
console.log(`Os fatores de ${limite} são: ${fatores}`)
*/

