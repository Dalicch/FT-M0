// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  newarray = (Object.entries(objeto))
  return newarray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var newobject = {};

  for(let i = 0; i < string.length; i++){
    if(!newobject[string[i]]){
      newobject[string[i]] = 0;
    }  
    newobject[string[i]] += 1;
  }
  return newobject;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = ""
  var min = ""
for (var i in s){
 if (s.charAt(i) === s.charAt(i).toUpperCase()) { may = may + s.charAt(i)}
 if (s.charAt(i) === s.charAt(i).toLowerCase()) { min = min + s.charAt(i)}
}
return may+min}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:

  var y = ""
  for (var i = str.length ; i >= 0 ; i--){
    y = y + str.charAt(i)
  }
  var ordenado  = y.split(" ") 
  var newstring = ""
 for (var i = ordenado.length-1; i >= 0 ; i--){
    if (ordenado[i] === ordenado[0] ) {newstring = newstring + ordenado[i]
      return newstring}
    newstring = newstring + ordenado[i] + " "
    }
 return(newstring)

    }

  

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var newstring = ""
  var str = numero.toString()
  for (var i = str.length -1 ; i >= 0 ; i--){
     newstring = newstring + str.charAt(i)
    }
    if ( newstring === str ) {return "Es capicua"}
      return "No es capicua"

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newstring = ""
  for (var i in cadena){
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") {continue} 
    newstring = newstring + cadena[i]
  }
  return newstring
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var newarr = arr.sort(function(a,b){
  return a.length - b.length
})
return newarr
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var newarray = []
  for (var i in arreglo1){
    var temp = arreglo1[i]
    for (var e in arreglo2) { 
    if (temp === arreglo2[e]) {newarray.push(arreglo2[e])}
    }

  }
 return newarray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

