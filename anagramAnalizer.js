var isAnagram = function(s, t) {
    let s1 = s.toLowerCase()
    let t1 = t.toLowerCase()
    
    const str1 = {}
    const str2 = {}
    
    // Recorro el string eliminando los espacios para almacenar solo las letras
    for(i in s1){
        if(s1[i] !== ' ')
            // Le asigno un valor cero a cada letra inicialmente
            str1[s1[i]] = 0
    }
    
    for(j in t1){
        if(t1[j] !== ' ')
            // Le asigno un valor cero a cada letra inicialmente
            str2[t1[j]] = 0
    }
    
    // Luego vuelvo a recorrer el string
    for(k in s1){
        // Pregunto si la letra del string que se esta evaluando existe en el objeto "store" y si existe incremento en 1 su valor
        if(Object.hasOwn(str1, s1[k])){
            str1[s1[k]] += 1
        }
    }
    
    for(l in t1){
        // Pregunto si la letra del string que se esta evaluando existe en el objeto "store" y si existe incremento en 1 su valor
        if(Object.hasOwn(str2, t1[l])){
            str2[t1[l]] += 1
        }
    }
    console.log(str1, str2)
    keysStr1 = Object.keys( str1 );
    keysStr2 = Object.keys( str2 );

    if ( keysStr1.length !== keysStr2.length ) return false;

    for ( key of keysStr1 ) {
        let val1 = str1[key];
        let val2 = str2[key];

        if ( val1 !== val2 ) return false;
    }

    return true;
    
};


// console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("anagram", "wagaram"))
console.log(isAnagram("iman", "mani"))