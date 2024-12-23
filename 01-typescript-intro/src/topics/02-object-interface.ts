const skill: string[] = ['Bash', 'Counter', 'Healing']


// interfas
interface Character{
    name: string,
    hp:number,
    skill: string[],
    hometown?: string
}
// objeto literal de JS no puedes poner 
const strider: Character = {
    name: "strider",
    hp: 100,
    skill:['Bash', 'Counter']
};


strider.hometown = "iowa";

console.table( strider)

export {};