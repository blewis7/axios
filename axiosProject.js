const container = document.querySelector('.gif-container');
const input = document.querySelector('.input')

function createGifs(res){
    let gifNum = res.data.data.length;
    let randomIdx = Math.floor(Math.random() * gifNum);
    let newDiv = document.createElement('div')
    let newElement = document.createElement('img');
    newElement.src = res.data.data[randomIdx].images.original.url;
    newDiv.appendChild(newElement);
    container.appendChild(newDiv);
}

// need a function that searches for the gif

$('.to-search').on('click', async function(e){
    e.preventDefault();
    let searchName = input.value;
    input.value = '';
    
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {q: searchName, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
    });
    createGifs(res);
})

$('.remove').on('click', function(){
    container.empty();
});