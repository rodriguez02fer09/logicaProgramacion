//dado un numero , mostrar una escalera  con escalones  de "[-]"
//usando el numero para los niveles de la escalera


const escalera = (numero) => {
    let escalera_completa =" "

    for (let i =1 ; i <= numero ; i++ ){
        i
        let escalones = ""
        for (let j = 1;j <=i;j++ ){
            escalones += "[-]"
            j
        }
        escalera_completa += escalones + '\n'
    }
  return escalera_completa
}

ladder = escalera (3)
ladder
