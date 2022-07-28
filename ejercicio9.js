const elementosComunes = (array1, array2) => { 
    var elComunes = []
    
    for (let i = 0; i <= array1.length; i++){
        i
         for (let j = 0; j <= array2.length; j++){
            j
       if (array1[i] === array2[j])
           elComunes ++
           
     }
     
    }
    return elComunes ++
        
}
arrays =elementosComunes([1,2,3,4],[1,3])
arrays

//otra forma de hacerlo 
function elComunes  (array1,array2){
    const filtrado = array1.filter(elemento =>{
        return array2.includes(elemento)
    })
    return filtrado 
}

elco =  elComunes ([1,2,3,4],[1,3])
elco