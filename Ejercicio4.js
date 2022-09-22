// Escribir una función llamada ajustarTexto que reciba dos argumentos:  un string y un número (que representa una longitud).  
// La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena es mayor al número, debes 
// recortar la cadena. De lo contrario agrega espacios en blanco hasta completar la longitud.

function ajustarTexto(str, long){
    const container = []
    if(long > 0 && str !== "" && str !== " "){
        if(long <= str.length){
            for(var i = 0; i <= long; i++){
                container.push(str[i])
            }
            let newStr = container.join('')
            return (`"${newStr}"`)
        }else{
            for(var i = 0; i <= long; i++){
                if(i > str.length){
                    container.push(" ")
                }else{
                    container.push(str[i])
                }
            }
            // console.log(container)
            // console.log(container.length)
            let newStr = container.join('')
            return (`"${newStr}"`)
        }
    }else if(long = 0){
        return ("\"\"")
    }else if(str === " "){
        return ("\" \"")
    }
    
}


// console.log(ajustarTexto(" ", 3))
// console.log(ajustarTexto("hola", 2)) 
// console.log(ajustarTexto("Hola", 0))
console.log(ajustarTexto("Hola", 5)) 