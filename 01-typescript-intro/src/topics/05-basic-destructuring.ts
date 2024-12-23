// // 
// interface AudioPlayer{
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details:Details
// }

// interface Details{
//     author: string;
//     year: number;
// }

// // 
// const audioVolume: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 49,
//     song: "string",
//     details:{
//         author: "string",
//         year: 2024
//     }
// }

// // se aplica en objetos, exportaciones, argumentos, archivos, arreglos
// //  porder tomar piezas de un "objeto"
// //creo una constate  y cambiar el nomber usar :
// const { details:{author} } = audioVolume;

// console.log(author)

// destructirong arreglos, se unsan llaves cuadradas
const [ , , may="Not found"]: string[] = ["ash", "brow","may"]

console.log(may)

export {}