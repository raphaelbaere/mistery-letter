const input = document.querySelector('#carta-texto');
const buttonCreateCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');

buttonCreateCarta.addEventListener('click', () => {
  if (!input.value.trim()) {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
  cartaGerada.innerHTML = '';
  const cartaSeparada = input.value.split(' ');
  for (let index = 0; index < cartaSeparada.length; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = cartaSeparada[index];
    cartaGerada.appendChild(createSpan);
  }
 }
});
