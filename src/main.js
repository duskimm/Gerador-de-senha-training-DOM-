import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const GenBtn = document.querySelector('button');
const VisibleKey = document.querySelector('h2');

GenBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  VisibleKey.innerHTML = randomPassword;
  
});

const copyKey = copy;

VisibleKey.addEventListener('click', function () {
  copyKey(event.target.innerHTML);
  alert('Senha copiada com sucesso')
});