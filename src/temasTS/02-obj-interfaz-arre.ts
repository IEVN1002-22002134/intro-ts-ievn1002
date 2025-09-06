interface Alumno{ //interfaz
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number; //el ? es para que sea opcional

}
//0bjeto de la interfaz alumno
const alumno:Alumno={
    nombre: "Mario",
    apellido: "Lopez",
    edad: 22,
    email: "mario@gmail.com",
}
console.table(alumno)

//arrreglo
let mascotas =['perro','gato','perico'];
mascotas[1]='nuevo gato'
mascotas.push('leon');//pus es para 
console.log(mascotas);

let tem:(number|string)[]=[];
tem.push(11)
tem.push('once')


