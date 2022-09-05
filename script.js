const input = document.querySelector('#carta-texto');
const buttonCreateCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig',
  'rotateleft', 'rotateright', 'skewleft', 'skewright'];
const contador = document.querySelector('#carta-contador');

buttonCreateCarta.addEventListener('click', () => {
  if (!input.value.trim()) {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.innerHTML = '';
    const cartaSeparada = input.value.split(' ');
    for (let index = 0; index < cartaSeparada.length; index += 1) {
      const createSpan = document.createElement('span');
      createSpan.innerHTML = cartaSeparada[index];
      createSpan.className = `${classes[Math.floor(Math.random() * classes.length)]
      } ${classes[Math.floor(Math.random() * classes.length)]} ${
        classes[Math.floor(Math.random() * classes.length)]} ${
        classes[Math.floor(Math.random() * classes.length)]}`;
      createSpan.addEventListener('click', (event) => {
        event.target.className = `${classes[Math.floor(Math.random() * classes.length)]} ${classes[Math.floor(Math.random() * classes.length)]} ${classes[Math.floor(Math.random() * classes.length)]} ${classes[Math.floor(Math.random() * classes.length)]}`;
      });
      cartaGerada.appendChild(createSpan);
    }
    contador.innerHTML = cartaGerada.childElementCount;
  }
});
