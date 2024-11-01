function somaMultiplos(){
    let soma: number = 0;
    let i: number = 0;
    let limite: number = 1000;

    while( i < 1000){
        if(i % 5==0||i % 3==0){
        
            soma += i;
        }

        i++;
    }
    return soma;
}
let resultado: number = somaMultiplos();
console.log(`A soma é ${resultado}`)