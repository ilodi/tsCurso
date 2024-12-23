//puede cambiar
let name: string = 'puedo cambiar';

//jamas va a cambiar
const nameConst: string = 'no cambiare';

//puede que si puede que no cambiar, entre A | B
let hpPoint: number | 'FULL' = 151;

const isAvlive: boolean = true;

hpPoint = 'FULL'

console.log({nameConst, name, hpPoint, isAvlive})


// con esto vite sabe que es un modulo
export{}