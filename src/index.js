import './mystyles.css';
import dbcaller from './modules/dbcaller.js';
import commentPop from './modules/comment.js';

import companyLogo from '../Assets/company_logo.png';
import likesFunction from './modules/likes.js';

const logoDiv = document.querySelector('.logo-div');
const component = () => {
  const element = document.createElement('div');
  const mycompanyLogo = new Image();
  mycompanyLogo.src = companyLogo;
  mycompanyLogo.className = 'logo';
  mycompanyLogo.alt = 'Company Logo';
  mycompanyLogo.title = 'Company Logo';
  element.appendChild(mycompanyLogo);
  return element;
};
logoDiv.appendChild(component());

window.onload = () => {
  dbcaller();
};

document.addEventListener('click', (e) => {
  const { id } = e.target;
  let collector = e.target.classList;
  collector = Array.from(collector);
  if (collector.includes('btn-comment')) {
    commentPop(id);
  } else if (collector.includes('fa-heart')) {
    likesFunction(id, e);
  }
});
