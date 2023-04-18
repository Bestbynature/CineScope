const commentGetter = async (a) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/comments?item_id=${a.item_id}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};

const commentPoster = async (a) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/comments';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      "item_id": `${a.item_id}`,
      "username": `${a.username}`,
      "comment": `${a.comment}`
  }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };
  await fetch(url, options);
};

const commentsFunction = async (...args) => {
  if(args.length === 3){
    await commentPoster(args[0]);
    const commentData= await commentGetter(args[0]);
    const commentDiv = args[1].target.parentElement.previousElementSibling;
    commentData.forEach(comment => {
    commentDiv.innerHTML += `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`
  });
  }else{
    const commentData= await commentGetter(args[1]);
    commentData.forEach(comment => {
    args[0].innerHTML += `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`
  });
  }
};

export default commentsFunction;