function frecuencias(str){
    // Convierto el string a minusculas y lo asigno a otra variable
    let strLower = str.toLowerCase()

    // Creo un objeto para almacenar los caracteres separados
    const store = {}
    
    // Recorro el string eliminando los espacios para almacenar solo las letras
    for(i in strLower){
        if(str[i] !== ' ')
            // Le asigno un valor cero a cada letra inicialmente
            store[strLower[i]] = 0
    }
    
    // Luego vuelvo a recorrer el string
    for(i in strLower){
        // Pregunto si la letra del string que se esta evaluando existe en el objeto "store" y si existe incremento en 1 su valor
        if(Object.hasOwn(store, strLower[i])){
            store[strLower[i]] += 1
        }
    }
    
    // Muestro por consola el objeto "store"
    console.log(store)
}

// Llamamos a la funcion para evaluarla con distintos strings

// console.log(frecuencias("hola mundo"));
console.log(frecuencias("anita lava la tina"));