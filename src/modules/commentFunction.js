const commentGetter = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/comments';
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const commentPoster = async (a) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/comments';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      "item_id": `${a}`,
      "username": "Jane",
      "comment": "Hello"
  }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };
  await fetch(url, options);
};

const commentsFunction = async (a) => {
  console.log(a)
  // await commentPoster(a);
  // const newValue = await likeGetter();
  // const likeDiv = args[1].target.parentElement.nextElementSibling;
  // const currentLikes = newValue.filter((like) => like.item_id === args[0]);
  // likeDiv.innerHTML = `<p>${currentLikes[0].likes} likes</p>`;
};

export default commentsFunction;