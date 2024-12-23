// encadenamiento opcional
import { Passenger } from './11-optional-chaining';

export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger={
    name:'lodi'
}

const passenger2: Passenger={
    name:'beto',
    children:['zoe', 'feri']
}

const printChildren = (passenger: Passenger)=>{
    // X.? si exitste ponlo si la condicion no se ecribe por el opcion || y da un valor X 
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren)
}

printChildren(passenger2)