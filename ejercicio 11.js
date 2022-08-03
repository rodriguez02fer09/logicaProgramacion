//  Dadi un texto y busqueda,censurar todas las coincidencias 
//de la busqueda  en el texto con [-censurado-]


const buscarPalabra = (texto , buscar) =>{
    let resultado = " "
   if  (texto && buscar) {
        resultado = texto.replace(buscar , "[-censurado]")

      }
      return resultado 
}
buscar =buscarPalabra ("hola como estas", "hola")
buscar
