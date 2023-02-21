// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante

console.log("\nEjercicio 1: Sociedad secreta.")

const secretName1 = ["Felipe", "Fer", "Zabdiel"]; // FFZ
const secretName2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]; // CJMPRR
const secretName3 = ["Harry", "Ron", "Hermione"]; // HHR

const secretName = (array) => {
  const secretInit = [];
  for (let i = 0; i < array.length; i++) {
    secretInit.push(array[i].substring(0, 1));
  }
  return secretInit.sort().join("");
};

console.log(secretName(secretName1));
console.log(secretName(secretName2));
console.log(secretName(secretName3));

// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

console.log("\nEjercicio 2: Usuarios online.")


const onlineStatus = ["mockIng99", "J0eyPunch", "glassedFer"];
const onlineStats = (array) => {
  if (array.length == 0) {
    return `No hay nadie online`;
  } else if (array.length == 1) {
    return `${array} online`;
  } else if (array.length == 2) {
    return `${array} online`;
  } else {
    return `${array[0]}, ${array[1]} and ${array.length - 2} more online`;
  }
};

console.log(onlineStats(onlineStatus));

// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro // arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] // arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

console.log("\nEjercicio 3: Multiplos con parametros numero y longitud.")

const multiples = (numero, longitud) => {
  let array = [];
  for (let i = 1; i < longitud + 1; i++) {
    array.push(numero * i);
  }
  return array;
};

console.log(multiples(2, 10));
console.log(multiples(17, 6));

// Escrbir una funcion que descubra si el array es dominante positivo // Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10] //

console.log("\nEjercicio 4: Array dominante.")


let positiveDom = [-1, -3, -5, 4, 6767];

const dominantPosOrNeg = (array) => {
  let arrayPos = [];
  let arrayNeg = [];
  let neutro = [];

  array.forEach((e) => {
    if (e > 0) {
      arrayPos.push(e);
    } else if (e < 0) {
      arrayNeg.push(e);
    } else if (e == 0) {
      neutro.push(e);
    }
  });

  if (array.length == 0) {
    return `El array tiene ${array.length} elementos`;
  } else if (
    array.length > 0 &&
    arrayPos.length > arrayNeg.length &&
    arrayPos.length > neutro.length
  ) {
    return `Dominante positivo: ${arrayPos.length} elementos positivos, ${arrayNeg.length} elementos negativos y ${neutro.length} elementos neutros`;
  } else if (
    array.length > 0 &&
    arrayNeg.length > arrayPos.length &&
    arrayNeg.length > neutro.length
  ) {
    return `Dominante negativo: ${arrayNeg.length} elementos negativos, ${arrayPos.length} elementos positivos y ${neutro.length} elementos neutros`;
  } else if (
    array.length > 0 &&
    neutro.length > arrayPos.length &&
    neutro.length > arrayNeg.length
  ) {
    return `Dominante neutro: ${neutro.length} elementos neutros, ${arrayPos.length} elementos positivos y ${arrayNeg.length} elementos negativos`;
  } else if (
    (array.length > 0 && arrayNeg.length == arrayPos.length) ||
    arrayNeg.length == neutro.length ||
    neutro.length == arrayPos.length
  ) {
    return `Indeterminado: ${neutro.length} elementos neutros, ${arrayPos.length} elementos positivos y ${arrayNeg.length} elementos negativos`;
  }
};


console.log(dominantPosOrNeg(positiveDom));

// Promedio antipode // Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos: // - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales // - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte // [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8] // - Dividir cada numero del array final entre 2 -> [3.5, 12, 4]

console.log("\nEjercicio 5: Promedio Antipode.")


const arrayEj = [1, 2, 3, 22, 5, 22, 6];
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const averageAntipode1 = (array) => {
  const array1 = [];
  const array2 = [];
  const arrayAdd = [];
  if (array.length % 2 == 1) {
    array.splice((array.length - 1) / 2, 1);
  }
  for (let i = 0; i < array.length / 2; i++) {
    array1.push(array[i]);
    array2.unshift(array[array.length - i - 1]);
    arrayAdd.push((array1[i] + array2[0]) / 2);
  }
  return arrayAdd;
};

console.log(averageAntipode1(arrayEj));
