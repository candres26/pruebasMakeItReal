function adultos(arr){
    let result =[]
    for(i in arr){
        if(arr[i] >= 18 && arr[i] < 70)
            result.push(arr[i])
    }

    return result
}

console.log(adultos([28,45,19,21,18,69]))
// console.log(adultos([28,45,17,21,17,70]))
// console.log(adultos([28, 45, 71, 21]))