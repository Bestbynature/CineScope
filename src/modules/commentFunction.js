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
      "item_id": a.item_id,
      "username": a.username,
      "comment": a.comment
  }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  };
  await fetch(url, options);
};

const commentsFunction = async (a, e) => {
  await commentPoster(a);
  
  // const commentData= await commentGetter(a);
  const sampleData = [
    {
        comment: "This is nice!",
        creation_date: "2021-01-10",
        username: "John"
    },
    {
        comment: "Great content!",
        creation_date: "2021-02-10",
        username: "Jane"
    }
]
  const commentDiv = e.target.parentElement.previousElementSibling;
  console.log(commentDiv);
  sampleData.forEach(comment => {
    commentDiv.innerHTML += `
    <p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>
    `
  });
};

export default commentsFunction;