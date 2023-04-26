import likesFunction from './likes.js';

const main = document.querySelector('main');
const Mcounter = document.querySelector('header h1');

const database = (itemArr) => {
  main.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  main.appendChild(wrapper);

  const newlist = itemArr.slice(0, 16);

  newlist.forEach((movie) => {
    const genre = movie.genres.join(', ');
    const card = document.createElement('div');
    card.className = 'grid-item';

    card.innerHTML = `<img src='${movie.image.original}' alt="Movie graphic" title='${movie.name}' class="graphic">
        <p>${movie.name}</p><hr>
        <div class="love-div" ><i class="fa-regular fa-heart" id=${movie.id}></i></div>
        <div class="likes" id="${movie.id}">0 likes</div>
        <p>${genre}</p>
        <p>Language: ${movie.language}</p>
        <p>Premiered on ${movie.premiered}</p><hr>
        <button type="button" id='${movie.id}' class="btn btn-comment">Comment</button>
        <button type="button" id='${movie.id}' class="btn btn-reserve">Reserve</button>`;
    wrapper.appendChild(card);
  });
  Mcounter.innerHTML = `<h1>CineScope Movie database (${newlist.length})</h1>`;

  const likeDiv = document.querySelectorAll('.likes');
  likesFunction(likeDiv);
};

export default database;