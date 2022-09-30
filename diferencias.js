// Diferencias entre dos strings

// Escribe una función llamada `distancia` que reciba dos strings del mismo tamaño y 
// retorne el número de posiciones que tengan caracteres diferentes.

function distancia(str1, str2) {
    let ar1 = [...str1]
    let ar2 = [...str2]
    let caracteresDiferentes = 0
    let j = 0
    // console.log(ar1, ar2)
    if(ar1.length != ar2.length){
        console.log("El tamaño de los strings es diferente!!")
    }else{
        // console.log("Es igual, puedo continuar")
        for(i in ar1){
            if(ar1[i] === ar2[j]){
                console.log("Son iguales")
            }else{
                caracteresDiferentes++
            }
            j++
        }
    }

    return caracteresDiferentes
} 

// console.log(distancia("hola", "pola")) // -> 1
console.log(distancia("sol", "tal")) // 2 