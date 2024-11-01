//string
let nome: string = 'SAAAAAAAANDRO';
console.log(nome);

//numbers
let idade: number = 27
console.log(idade);

//booleans
let temHobbies: boolean = false;
// temHobbies = 1 (erro)
console.log(temHobbies);

//arrays
let carros: any[] = ["volvo","Audi","Mercedes"];
console.log(carros[0]);
console.log(typeof carros);

//tuplas
let dados: [string,number,number] = ['Fabio',123,0];
console.log(dados) ;

//enums
enum cor {
    cinza,  //0
    preto,  //1
    azul    //2
}
let minhaCor: cor = cor.azul;
console.log(minhaCor);

//FUNÇÕES 

function multiplicar(numA:number, numB:number){
    return numA*numB;
}
console.log(`O resultado da multiplicação é: ${multiplicar(2, 5)}.`)

let calcular:(a:number, b:number) => number;
calcular = multiplicar;
console.log(calcular(4, 9));

//OBJETOS

let usuario: { id:number, nome:string, email:string, user:string, idade:number cidade:string, dataAcesso:string} ;

    usuario = {

    id: 1,
    nome: 'Ricardo',
    email: 'rich@lalala.com',
    user: 'Ronald99',
    idade: 29,
    cidade: 'Belgrado',
    dataAcesso: '25-02-2023'
}
console.log(usuario)

    usuario = {  
        id: 2,
        nome: 'Melissa',
        email: 'mel@lalala.com',
        user: 'Melissa888',
        idade: 33,
        cidade: 'Paris',
        dataAcesso: '23-05-2023'
}

console.log(usuario)