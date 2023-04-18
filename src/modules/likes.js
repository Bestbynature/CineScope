// xns1ROZAkOXmd23EMLBX
const likeGetter = async () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/likes';
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const likePoster = async (a) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/likes';
  const options = {
    method: 'POST',
    body: JSON.stringify({ item_id: `${a}` }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };
  await fetch(url, options);
  //   const data = response.json();
};

const likesFunction = async (...args) => {
  if (args.length === 1) {
    const newValue = await likeGetter();
    const divlist = args[0];
    for (let i = 0; i < newValue.length; i += 1) {
      if (newValue[i].item_id === 'undefined') {
        i += 1;
      } else {
        let value = Number(newValue[i].item_id);
        value = divlist[value - 1];
        value.innerHTML = `${newValue[i].likes} Likes`;
      }
    }
  } else {
    await likePoster(args[0]);
    const newValue = await likeGetter();
    const likeDiv = args[1].target.parentElement.nextElementSibling;
    const currentLikes = newValue.filter((like) => like.item_id === args[0]);
    likeDiv.innerHTML = `<p>${currentLikes[0].likes} likes</p>`;
  }
};

export default likesFunction;