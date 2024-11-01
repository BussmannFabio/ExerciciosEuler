const limite: number = 4000000 

function somaParesFibonacci(limite){
    let a: number = 1;
    let b: number = 2;
    let somaPares: number = 0;

    while(a<=limite){
        if(a%2==0){
            somaPares = somaPares+a;
        }

        const proxNum: number = a+b;
        a = b;
        b = proxNum;
    }
    return somaPares;
}

const resultado: string = somaParesFibonacci(limite);
console.log(`A soma dos termos pares da sequência de Fibonacci até o numero ${limite} é igual á ${resultado}.`);