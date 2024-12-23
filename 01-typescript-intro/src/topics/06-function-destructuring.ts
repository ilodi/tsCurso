export interface Product {
    description: string;
    price: number;

}

const phone: Product ={
    description: "nokia",
    price: 20.99
}

const tablet: Product ={
    description: "ipad 5",
    price: 399.99
}


const shopingCart = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOption{
    tax: number;
    products: Product[]
}


//tuplas === tipo diccionario 
// no mas de 3 argumentos, buena practiva. 
// si son mas manda un objeto
//function taxCalculation( options:TaxCalculationOption )
export function taxCalculation( options:TaxCalculationOption ): [number,number]{
    const {tax, products} = options;
    let total = 0;
    // 
    products.forEach( ({price}) =>{
        total += price
    } );

    return [total, total * tax]
}

// cuando una propiedad se llama igual que a variable se puede omitir 
const [total, taxTotal] = taxCalculation({
    products: shopingCart,
    tax
})

console.log('total', total)
console.log('tax', taxTotal)

// export{Product, taxCalculation}
