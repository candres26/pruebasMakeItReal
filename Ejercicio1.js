function numDuplicados(str){
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
        // Pregunto si la letra que de el string que se esta evaluando existe en el objeto "store" y si existe incremento en 1 su valor
        if(Object.hasOwn(store, strLower[i])){
            store[strLower[i]] += 1
        }
    }
    // Creo una variable acumuladora para almacenar la suma de las letras que estan en el array mas de una vez
    let rep = 0
    for(i in store){
        // Compruebo si el valor correspondiente a la propiedad evaluada es mayor a 1
        if(store[i] > 1)
            // Si se cumple incremento el acumulador en 1
            rep += 1
    }
    // Muestro por consola el valor de el acumulador de letras repetidas
    console.log(rep)
}

// Llamamos a la funcion para evaluarla con distintos strings

console.log(numDuplicados("abcaa"))
// console.log(numDuplicados("abab"));
// console.log(numDuplicados("abc"));