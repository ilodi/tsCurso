export class Person{
    // son variables pero dentro de las claes son PRIORIDADES
    //si es publica se vera siempre
    //si es privada solo en la clase

    //Cuando se usa la menera corta en el constructor se declara esto
    // public name?: string;
    // public address?: string;

    //crear
    
    // constructor(name: string, address: string){
    //     this.name = name;
    //     this.address = address;
    // }
    // manera corta en el constructor
    constructor(
        public name: string, 
        private address: string = 'No address')
        {}
}

// extender una clase 
// añade una capa extra de complejidad
// export class Hero extends Person {
//     // priorisar composicion que herencia 
//     // super es una funcion expecial de TS que llama al constructor del pladre
//     constructor(
//         public alterEgo: string, 
//         public age: number,
//         public realname: string  
//     ){
//         super(realname, 'New York')
//     }
// }

// priorisar composicion que herencia 
export class Hero  {
    constructor(
        public alterEgo: string, 
        public age: number,
        public realname: string ,
        public person: Person,
    ){
        this.person = new Person(realname)
    }
}


const tony = new Person('Tony', 'NY');
const hulkbuster = new Hero('Hulkbuster', 45, 'Tony', tony)
const ironman = new Hero('ironaMan', 45, 'Tony', tony)

console.log({ironman,hulkbuster})