// Write a function called `averagePrice` that receives an array of products as an argument and returns the average price of all products:


function averagePrice(products){
    let sumatoria = 0
    for(i in products){
        sumatoria = sumatoria + products[i].price
    }
    // console.log(sumatoria)
    let average = sumatoria / products.length
    
    return average
}


const products1 = [ 
{ name: "rice", price: 10 }, 
{ name: "panela", price: 5 }, 
{ name: "pasta", price: 16 }, 
{ name: "eggs", price: 9 },
];

const products2 = [ 
{ name: "rice", price: 10 }, 
{ name: "panela", price: 20 }, 
{ name: "pasta", price: 13 }, 
{ name: "eggs", price: 37 },
{ name: "potatos", price: 5 },
];


// console.log(averagePrice(products1)); // 10
console.log(averagePrice(products2)); // 17 