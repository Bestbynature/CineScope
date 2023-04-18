
// xns1ROZAkOXmd23EMLBX
const likeGetter = async () => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/likes'
    const response = await fetch(url)
    const data = response.json()
    return data
}

const likePoster = async(a) => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xns1ROZAkOXmd23EMLBX/likes'
    const options = {
        method: 'POST',
        body: JSON.stringify({"item_id": `${a}`}),
        headers: { 'Content-Type': 'application/json; charset=UTF-8'}
      };
    const response = await fetch(url, options)
    const data = response.json()
    // return data
}




const likesFunction = async(a, e) => {
    await likePoster(a)
    const newValue = await likeGetter()
    // localStorage.setItem('likes', JSON.stringify(newValue))

    let likeDiv = e.target.parentElement.nextElementSibling
    let currentLikes = newValue.filter(like => like.item_id === a)
    likeDiv.innerHTML = `<p>${currentLikes[0].likes} likes</p>`
    console.log(currentLikes[0].likes)
}

export default likesFunction