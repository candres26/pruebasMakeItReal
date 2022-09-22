// Crea una función llamada caracteresEnComun que recibe dos argumentos: str1 y str2. 
// La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

function caracteresEnComun(str1, str2){
    const comunes = []
    for(ele in str1){
        for(ele2 in str2){
            if(str1[ele] === str2[ele2] && str2[ele2] !== " "){
                if((comunes.find(busc => busc === str2[ele2]))){
                    continue 
                } else{
                    comunes.push(str2[ele2])
                }
            }
        }
    }

    return comunes
}

console.log(caracteresEnComun("Hola", "Mundo"))
// console.log(caracteresEnComun("German", "Gabriela"))
// console.log(caracteresEnComun("Hola", "Bye"))