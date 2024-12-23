
// funcion basica js = function NAME ( ) { }
//toda las funciones regresa undefined default

function addNumber(a: number, b: number){
    return a + b
}

const res: number = addNumber(1,2);


// impirmir con {} es mejor para ver un objeto
// console.log({res})

//arrow function
const addNumberArrow = (a:number,b:number) =>{ return `${a + b}` }

const resArrow = addNumberArrow(23,24)

// console.log({resArrow})

function multiPly(firstName: number, secondNumber?: number, base: number = 2){
    return firstName * base
}

const multi = multiPly(2,5)
// console.log({multi})

// lo que viene despues de : es si si es una funcion se usara arrow
interface Character{
    nambe: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = (character: Character, amount: number) =>{
    character.hp += amount;
}

// this hace referencia ese mismo objeto 
const strider  = {
    name: 'striders',
    hp: 50,
    showHp() { 
        console.log(`puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 10);

strider.showHp();

export {}