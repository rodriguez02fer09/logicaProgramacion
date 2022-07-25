function invertirCadena(cad) {
    var nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
cadena = invertirCadena('lola');
cadena