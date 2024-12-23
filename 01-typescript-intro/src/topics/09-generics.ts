// los genericos <GENERICS>
// <T> es el primer generico

export function whatsMyType<T>(argument: T): T{
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(151);
let amIArray = whatsMyType<number[]>([1,2,3,4]);


console.log(amIString.split(' '))
console.log(amINumber.toFixed)
console.log(amIArray.join('-'))

