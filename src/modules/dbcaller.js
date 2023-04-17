import database from './database.js';

const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

const pageLoader = async () => {
  const movieBank = await getMovies();
  database(movieBank);
};

const dbcaller = () => pageLoader();

export default dbcaller;
