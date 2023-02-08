// Crea una función que devuelva el saludo que corresponda
// al idioma proporcionado a partir del objeto

const saludos = {
  en: 'Hello',
  es: 'Hola',
  eu: 'Kaixo',
  jp: 'Konnichiwa',
};

const sayHi = (lang) => {
  // 👇🏻 Añade tu lógica aquí
  if (lang === 'en') {
    console.log(saludos.en);
  } else if (lang === 'es') {
    console.log(saludos.es);
  } else if (lang === 'eu') {
    console.log(saludos.eu);
  } else if (lang === 'jp') {
    console.log(saludos.jp);
  }
  // 👆🏻
};

console.log(sayHi('es')); // "Hola"
console.log(sayHi('jp')); // "Konnichiwa"
console.log(sayHi('eu')); // "Kaixo"
