import './mystyles.css';

import companyLogo from '../Assets/company_logo.png';

const logoDiv = document.querySelector('.logo-div');
const component = () => {
  const element = document.createElement('div');
  const mycompanyLogo = new Image();
  mycompanyLogo.src = companyLogo;
  mycompanyLogo.className = 'logo';
  element.appendChild(mycompanyLogo);
  return element;
};
logoDiv.appendChild(component());