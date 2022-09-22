// Crea una función llamada caracteresEnComun que recibe dos argumentos: str1 y str2. 
// La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

function caracteresEnComun(str1, str2){
    const comunes = []
    // Recorrido del primer string
    for(ele in str1){
        // Recorrido del segundo string
        for(ele2 in str2){
            // Verifico que el elemento de el str1 coincida con el elemento evaluado del str2 y que no sea un espacio
            if(str1[ele] === str2[ele2] && str2[ele2] !== " "){
                // Busco en el array "comunes" si el elemento ya se encuentra agregado para no volverlo a agregar
                if((comunes.find(busc => busc === str2[ele2]))){
                    // Hacemos un "continue" para seguir hacia la otra iteracion del for mas interno
                    continue
                } else{
                    // Agrego al array "comunes" el caracter comun
                    comunes.push(str2[ele2])
                }
            }
        }
    }
    // Devuelvo el arreglo que contiene o no caracteres comunes
    return comunes
}

console.log(caracteresEnComun("Hola", "Mundo"))
// console.log(caracteresEnComun("German", "Gabriela"))
// console.log(caracteresEnComun("Hola", "Bye"))