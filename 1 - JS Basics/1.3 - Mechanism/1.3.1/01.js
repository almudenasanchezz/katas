// Crea una función que muestre "MAYOR" si el número
// proporcionado es mayor que 5 y "MENOR" en caso contrario

const isGreatherThan5 = (number) => {
  // 👇🏻 Añade tu lógica aquí
  if (number > 5){
    console.log('MAYOR');
  } else {
    console.log('MENOR');
  }
  // 👆🏻
};

console.log(isGreatherThan5(3)); // "MENOR"
console.log(isGreatherThan5(5)); // "MENOR"
console.log(isGreatherThan5(8)); // "MAYOR"
