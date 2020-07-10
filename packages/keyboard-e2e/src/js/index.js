import ally from 'ally.js';
import '../css/main.css';

ally.query.focusable().forEach(el => {
  el.classList.add('js-focusable');
});

ally.query.tabbable().forEach(el => {
  el.classList.remove('js-focusable');
  el.classList.add('native-focusable');
});
