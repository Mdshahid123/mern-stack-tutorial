/** @jsx customCreateElement */
import { customCreateElement } from './customreact.js';
import customRender from './customreact.js';

const element = (
  <a href="https://google.com" target="_blank">
    click me to visit google
  </a>
);

const root = document.getElementById('root');
customRender(element, root);
