// ejercicio 8
function invertirNumero (num){
    let  numInv = ""
      stringNum = String(num)
     
     for (let i = stringNum.length -1; i >= 0 ; i--){
         i
         numInv += stringNum[i];
     }    
     
     return numInv
  }
  inv = invertirNumero (56)
  inv
 