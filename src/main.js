import { nanoid } from "nanoid";
import copy from 'clipboard-copy';
import './style.css';

const GenPassqord = document.querySelector('button');
const VisibleKey = document.querySelector('h2');

GenPassqord.addEventListener('click', () => {
  const randomPassword = nanoid();
  VisibleKey.innerHTML = randomPassword;
});

VisibleKey.addEventListener('click', (e) => {
  copy(e.target.innerHTML);
  alert('Senha copiada');
});