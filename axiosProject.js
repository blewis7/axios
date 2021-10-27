const container = document.querySelector('.gif-container');
const input = document.querySelector('.input')

async function getRandomGif(){
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {q: 'hello', api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
    });
    console.log(res.data.data)
    createGifs(res);
}

function createGifs(res){
    let gifNum = res.data.data.length;
    let randomIdx = Math.floor(Math.random() * gifNum);
    let newElement = document.createElement('img');
    newElement.src = res.data.data[randomIdx].url;
    container.appendChild(newElement);
}

// need a function that searches for the gif

// need a function that creates new elements and appends items to div

$('.remove').on('click', function(){
    container.empty();
});