
//Dado una array ,dividirlo en  un numero de subarrays
//como sea necesario basandonos en un numero que indique
//su tamaño
const dividirArray = (array, dividir) => {
    let arreglos = []
    array
    dividir
    let dividiendo = dividir
    for (let i = 0; i < array.length ;i += dividiendo ){
        i
        let partiendo = array.slice(i, i + dividiendo)
        partiendo
        arreglos.push(partiendo)
        arreglos
    }
    return arreglos
    }
da = dividirArray([1,2,3,4,5,6,7,8,9,10],3)
da