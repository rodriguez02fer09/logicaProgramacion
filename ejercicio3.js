//ejercicio 3
function conincidencias (frase, fraseBusqueda){
    const arrayFrase = frase.toLowerCase(" ").split(' ')
    const palabrasEncontradas = arrayFrase.filter((fraseActual) => {
        fraseActual
        fraseBusqueda
        if (fraseActual === fraseBusqueda.toLowerCase()){
          return true
        }
    }).length

    return palabrasEncontradas > 0
        ? palabrasEncontradas
        : 'No hay coincidencias'
}
c = conincidencias('SOY LA  FRASE' , "LA")
c

