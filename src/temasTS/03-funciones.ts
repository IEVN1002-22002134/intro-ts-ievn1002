function sumar(a:number, b:number):number{
    return a+b
}

const resulado=sumar(4,3);
console.log(resulado)

function multiplicar(n1:number, otronumero?:number, base:number=6):number{ //el dato puede ser inicializado 

    return n1 * base;
}
console.log(multiplicar(3));
console.log(multiplicar(3,5));
console.log(multiplicar(3,5,4));

//funciones tipo flecha
const addNumberArrow=(a:number, b:number):string=>{return `${a+b}`} //`${a+b}` permite imprimir los datos en string 

