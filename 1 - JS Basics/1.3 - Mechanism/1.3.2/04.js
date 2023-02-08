// Crea una función que muestre los números pares del 1 al 100
const showEven = () => {
  // 👇🏻 Añade tu lógica aquí (Incluye un condicional dentro del bucle)
  for (let x = 1; x <= 100; x++){
    if (x % 2 === 0) {
      console.log(x);
    }
  }
  // 👆🏻
};
showEven();
