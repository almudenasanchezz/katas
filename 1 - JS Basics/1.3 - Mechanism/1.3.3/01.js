// Muestra por consola un array de nombres a partir del siguiente array
const userList = [
  { name: 'Pedro', age: 21 },
  { name: 'Maria', age: 26 },
  { name: 'Marta', age: 34 },
];

// 👇🏻 Añade tu lógica aquí utilizando la función map
const userInfo = userList.map(function(element){
  return `${element.name} tiene ${element.age} años`;
})

console.log(userInfo);
// 👆🏻
