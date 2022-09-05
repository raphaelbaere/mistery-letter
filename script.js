const input = document.querySelector('#carta-texto');
const buttonCreateCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');

buttonCreateCarta.addEventListener('click', () => {
  cartaGerada.innerHTML = input.value;
  const cartaSeparada = cartaGerada.split(' ');
  const newWord = [];
  for (let index = 0; index < cartaSeparada.length; index += 1) {
    const span = document.createElement('span');
    span.innerHTML = `${cartaSeparada[index]}`;
    newWord.push(span);
  }
  cartaGerada.innerHTML = '';
  for (let b = 0; b < newWord.length; b += 1) {
    cartaGerada.appendChild(newWord[b]);
  }
});
