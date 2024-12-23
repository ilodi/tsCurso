// funciones especiales que se adjuntan a diferentes objetos
// los decaroadores se identifican con @
// estas funciones se adjuntan a las clases


// Es un tipo de dato generico que usa el operador rest para unit todos los atgumentos
// <T extends {new(...arg:any[]): {}}>
// 
function classDecorator<T extends {new(...arg:any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProp = 'new';
        hello = 'mundo'
    }
}

// por lo regular solo se consumen decoradores
// al usar decoradores, añaden o cambiar el comortamiento de la clase
@classDecorator
export class SuperClass{
    public myPro: string = '123'
    print(){
        console.log('Hola mundo')
    }
}

console.log(SuperClass);

// instancia 
const myClass = new SuperClass();
console.log(myClass)