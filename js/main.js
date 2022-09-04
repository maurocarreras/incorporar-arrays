
// class Consola{
//     constructor(marca, modelo , resolucion , portatil , generacion){

//         this.marca=marca;
//         this.modelo=modelo;
//         this.resolucion=resolucion;
//         this.portatil=portatil;
//         this.genearcion=generacion;
//         this.presentacion = () =>{
//             console.log(" hola soy una consola de " + this.generacion + " modelo " + this.modelo)
//         }
//     }
// }


// const consola1 = new Consola ("Nintendo","Snes",240, "no","cuarta generacion");

// const consola2 = new Consola ("Sega", "Mega drive", 240,"no" ," cuarta generacion");

// const consola3 =new Consola ("Play Station", "One", 480, "no", "quinta generacion");

// const consola4 = new Consola( "xbox", "xbox classic",480,"no","sexta generacion")

// const consola5 = new Consola("Nintendo","Game boy",240,"si","cuarta generacion")
    


// console.log(consola1);

// console.log(consola2);

// console.log(consola3);

// console.log(consola4);

// console.log(consola5);

const consolas=["Nes","Super Nintendo","Sega Genesis","Play Station One", "Nintendo 64","Dreamcast","Game Cube", "Play Station 2"," Xbox" ,"Nintendo Wii","Game Boy ",
"Nintendo DS", "Xbox 360", "Play Station 3"];

console.log(consolas);

console.log(consolas[5]);

console.log(consolas[0]);

consolas.push("xbox 360","Play station 4");

console.log(consolas);

consolas.unshift("Atari 2600","ColecoVision");

console.log(consolas);

consolas.splice(8,1);

console.log(consolas.includes("Play station 5"));

console.log(consolas.includes("Super Nintendo"));

const especificaciones=["Marca" , "modelo","resolucion","portatil","generacion"];

console.log(especificaciones);

especificaciones.push("juegos online ");

console.log(especificaciones);

console.log(especificaciones.indexOf("portatil"));