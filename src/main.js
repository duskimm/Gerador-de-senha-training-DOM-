import { nanoid } from 'nanoid';
import './style.css'

const GeradorBtn = document.querySelector('button');
const SenhaVisual = document.querySelector('h2');

GeradorBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  SenhaVisual.innerHTML = randomPassword;
});