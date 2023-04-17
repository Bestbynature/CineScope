import './mystyles.css'

const logoDiv = document.querySelector('.logo-div')

import company_logo from '../Assets/company_logo.png'
const component = () => {
  const element = document.createElement('div');
  const mycompany_logo = new Image();
  mycompany_logo.src = company_logo;
  mycompany_logo.className = 'logo';
  element.appendChild(mycompany_logo);
  return element;
}  
logoDiv.appendChild(component());