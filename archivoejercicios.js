/* Ejercicio 1.
Crear el sistema de calendario para verificar el dia día actual, junto a la hora es considerada día y horario laboral esándar
 - 9am - 6pm es horario laboral
 - new Date().getDay() resulta en el dia de la semana del 0-6
Funcion bussinesHours
Parámetros
 - hour <- Hora actual
Return
 - True/False si la hora actual es horario laboral
Función businessDay
Parámetros
 - day
Return
 - True / False si el día actual es laboral
Verificación de la resolución de ambas funciones debe mostrar un mensaje*/

const bussinesHours = (hour) => {
  return hour <= 18 && hour >= 9 ? true : false;
};

const businessDay = (day) => {
  const datex = new Date().get;
  const currentDay = new Date().getDay();

  return day > 0 && day < 6 ? true : false;
};

const working = (hour, day) => {
  return bussinesHours(hour) && businessDay(day);
};
console.log("Ejercicio 1. Día y hora laboral.");
console.log(working(9, 0));

/* Ejercicio 2. 
Escribir una funcion que regrese la cantidad de valores true que hay en un array*/

let countTrue = [];
let contadorArrayTrue = 0;
let i = 0;
const valoresTrue = (arrayTrue) => {
  if (arrayTrue[contadorArrayTrue] == true) {
    i += 1;
    contador += 1;
    return valoresTrue(arrayTrue);
  } else if (arrayTrue[contadorArrayTrue] == false) {
    contadorArrayTrue += 1;
    return valoresTrue(arrayTrue);
  } else {
    return i;
  }
};
console.log("\nEjercicio 2: Total de True en un Array. ");
console.log(valoresTrue(countTrue));

/* Ejercicio 3. Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
 Usar recursion */
function greatestComDen(a, b) {
  if (b == 0) {
    return a;
  } else if (b != 0) {

    return greatestComDen(b, a % b);
  }
}
console.log("\nEjercicio 3: Máximo común divisor de dos numeros positivos.");
console.log(greatestComDen(20, 40));

/* Ejercicio 4. 
 Encontrar los primeros n elementos de la serie fibonacci
 (5) -> 5 elementos fibonacci
 Usar recursion */

let contadorFib = 1;
let fibX = 0;
let fibY = 1;

const fibonacci = (n) => {
  if (contadorFib < n+1) {
    if (contadorFib % 2 == 1) {
      console.log(fibX);
      fibX = fibX + fibY;
      contadorFib += 1;
      return fibonacci(n);
    } else {
      console.log(fibY);
      fibY = fibY + fibX;
      contadorFib += 1;
      return fibonacci(n);
    }
  }
};
console.log("\nEjercicio 4: Fibonacci.");
fibonacci(5);

/* Ejercicio 5. Encontrar el numero n de una figura piramidal triangular (tetrahedron) // (nivel) -> cantidad de numeritos */
const nTetrahedron = (nivel) => {
  return `En un Tetrahedron de ${nivel} niveles, hay una cantidad de  ${(nivel * (nivel + 1) * (nivel + 2)) / 6}`;
};
console.log("\nEjercicio 5: Tetrahedron.");
console.log(nTetrahedron(4));

/* Ejercicio 6. Crear una funcion que tome el nombre de un pais y su area  
(nombre, a) 
Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta 
('Russia', 17098242) -> Russia is 11.48% 
("USA", 9372610) -> "USA is 6.29% */

const areaCountry = (country, areaKM) => {
  const areaEarth = 1489737.49176;
  const areaCountryPercentage = areaKM / areaEarth;
  return `${country} is ${areaCountryPercentage.toFixed(2)}%`;
};
console.log("\nEjercicio 6: Área del país.");
console.log(areaCountry("Russia", 17098242));
console.log(areaCountry("USA", 9372610));

/* Ejercicio 7. Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0 // No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit */

function reverseNum(num) {
  return `El input ${num} retorno a ${Math.abs(num - 1)}`;
}
console.log("\nEjercicio 7: 0 a 1 y 1 a 0");
console.log(reverseNum(0));
console.log(reverseNum(1));

/* Ejercicio 8. Messenger bzzz // (0 ) n // Si no hay nadie -> "No hay nadie en linea" // Si hay 1 persona -> "user1 esta en linea" // Si hay 2 personas -> "user1 y user2 estan en linea" // Si hay n>2 personas, "user1 y n-1 mas estan en linea"  */

const buzzMessenger = (n) => {
  switch (n) {
    case 0:
      return "No hay nadie en linea";
      break;
    case 1:
      return "user1 esta en linea";
      break;
    case 2:
      return "user1 y user2 están en linea";
      break;
    default:
      return `user1 y ${n} más están en linea`;
  }
};
console.log("\nEjercicio 8: Usuarios en línea.");
console.log(buzzMessenger(10));
