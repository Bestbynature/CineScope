import './mystyles.css';
import database from './database.js';

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

const getMovies = async() => {
  const response = await fetch(`https://api.tvmaze.com/shows`)
  const data = await response.json()
  return data;
}
getMovies()
const pageLoader = async() => {
      const movieBank = await getMovies();
      database(movieBank)
}


window.onload = () => {
     pageLoader()
}

export default pageLoader