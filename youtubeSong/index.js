const axios=require('axios').default;
const yMusic=require('node-youtube-music');
const artist =yMusic.searchArtists('Bob Marley');
artist.then(result=>{
  console.log(result);
  result.map(item=>{
      //console.log(item.thumbnailUrl);
  })
})
.catch(err=>{
    console.log(err);
});
axios.get('https://jsonplaceholder.typicode.com/todos')
.then(todo =>{
console.log(todo);
todo.data.map(item=>{
    let title=item.title;
    console.log(title);
});
})
.catch(err=>{
    console.log(err);
});