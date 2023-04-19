import dbcaller from './dbcaller.js';
import commentFunction from './commentFunction.js';

const main = document.querySelector('main');

const oneMovie = async (a) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${a}`);
  const data = await response.json();
  return data;
};

const epiGetter = async (a) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${a}/episodes`);
  const data = await response.json();
  return data;
};

const commentPop = async (a) => {
  const movie = await oneMovie(a);
  const episodes = await epiGetter(a);
  main.innerHTML = '';
  const commentSection = document.createElement('div');
  commentSection.className = 'comment';
  main.appendChild(commentSection);
  commentSection.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark fa-beat-fade"></i><img src="${movie.image.medium}" alt="${movie.name}" title="${movie.name}">
    <h2>${movie.name}</h2>
    <table>
        <tr><td>Runtime: ${movie.runtime} </td><td>Status: ${movie.status} </td>
        </tr>
        <tr><td>Ended on: ${movie.ended} </td><td>Rating: ${movie.rating.average} </td>
        </tr>
    </table>
    <p>The first twenty episodes<p>
    <table class="episode-class"></table>
    <p>For more information about the movie, please click <a href="${movie.officialSite}">this link</a></p>
    <h3>Comments (2)</h3>
    <div class="user-comments"></div>
    <form id="form">
        <h3>Add a comment</h3>
        <input class="user-name" type="text" placeholder="Your name" required>
        <textarea class="user-comment" cols="30" rows="10" placeholder="Your insights" required></textarea>
        <button class="comment-post" type="submit">Comment</button>
    </form>`;

  const episodeClass = document.querySelector('.episode-class');
  let count = 0;
  while (count <= 20) {
    episodeClass.innerHTML += `<tr><td>Episode Name: ${episodes[count].name} </td><td>Air-Date: ${episodes[count].airdate} </td><td class="link">
      <a href="${episodes[count].url}"><button>Link to the episode</button></a></td></tr>`;
    count += 1;
  }
  main.scrollIntoView({ behavior: 'smooth' });
  const divCom = document.querySelector('.user-comments');
  const payLoad2 = { item_id: a };
  commentFunction(divCom, payLoad2);

  document.querySelector('.comment-post').addEventListener('click', (e) => {
    const userName = document.querySelector('.user-name').value;
    const userComment = document.querySelector('.user-comment').value;
    if (userName === '' || userComment === '') return;
    const payLoad = { item_id: a, username: userName, comment: userComment };
    document.querySelector('.user-name').value = '';
    document.querySelector('.user-comment').value = '';
    const b = userName;
    commentFunction(payLoad, e, b);
  });
};

document.addEventListener('click', (e) => {
  let collector = e.target.classList;
  collector = Array.from(collector);
  if (collector.includes('fa-circle-xmark')) {
    dbcaller();
  }
});

export default commentPop;
