import {nanoid} from 'nanoid';

const GeradorBtn = document.querySelector('button');
const SenhaVisual = document.querySelector('h2');

GeradorBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  SenhaVisual.innerHTML = randomPassword;
});