function updateClass() {
  // Busca el elemento con clase lucia y añade una clase activa con classList
  // Si la clase ya existe, eliminalá en vez de añadirla
  // 👇🏻
  document.querySelector('.lucia').classList.add('active');
  document.querySelector('.lucia').classList.remove('active');
}
