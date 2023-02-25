function prt(value)
{
   console.log(value);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arrayString = string.split('').sort();
   let objetoSort = {};
   let countCutter = 0;

   prt(string.split('').sort());
   for (let i = 1; i < arrayString.length; i++) {
      if(arrayString[i] == arrayString[i-1]){
         countCutter = countCutter + 1;
      }else{
         objetoSort[arrayString[i-1]] = countCutter;
         countCutter = 1;
      }
   }

   return objetoSort;
}

prt(numberOfCharacters('sktpwrroqstkrpwwsqtqopwktsd'));