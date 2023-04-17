const main = document.querySelector('main');

const database = (itemArr) => {
  main.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  main.appendChild(wrapper);
  itemArr.forEach((movie) => {
    const genre = movie.genres.join(', ');
    const card = document.createElement('div');
    card.className = 'grid-item';

    card.innerHTML = `<img src='${movie.image.original}' alt="Movie graphic" title='${movie.name}' class="graphic">
        <p>${movie.name}</p><hr>
        <p><i class="fa-regular fa-heart"></i> 3 likes</p>
        <p>${genre}</p>
        <p>Language: ${movie.language}</p>
        <p>Premiered on ${movie.premiered}</p><hr>
        <button type="button" id='${movie.id}' class="btn btn-comment">Comment</button>
        <button type="button" id='${movie.id}' class="btn btn-reserve">Reserve</button>`;
    wrapper.appendChild(card);
  });
};

// document.addEventListener('click', (e) => {
//   const { id } = e.target;
//   let collector = e.target.classList;
//   collector = Array.from(collector);
//   if (collector.includes('btn-comment')) {
//     commentPop(id);
//   } else if (collector.includes('fa-heart')) {
//     likesFunction();
//   }
// });

export default database;