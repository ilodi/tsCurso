// los archivos se encapsulan en modulos y solo se exportan
// los que en export {};

//desctucturas una funcion de un file
import { Product, taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product[] = [{
    description: "apple",
    price: 92.99
},
{
    description: "windows",
    price: 29.99
},
{
    description: "linux",
    price: 49.99
}
]

const [total, tax] = taxCalculation({
    products: shoppingCart;
    tax:  0.15,
})

console.log('total', total)
console.log('tax', taxTotal)