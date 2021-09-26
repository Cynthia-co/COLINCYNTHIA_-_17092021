let url = `http://localhost:3000/api/cameras`;
// let cameras =  fetch (url);
// let data = cameras.map;

function getCamera (){
fetch(url)
  .then (data => data.json())
  .then(data => console.log(data))
  .then(data => {
    let camera = data.map; 
     for (let i=0; i < camera.length; i++){
      let name = camera[i].name;
      let imageUrl = camera[i].imageUrl;
      let description = camera[i].description;
      let price = camera[i].price /100;
      let id  = camera[i]._id;

      let card =`<div class="main__card">
      <img src="${imageUrl}" class="card-img-top" alt="camera">
     <div class="main__card-body">
        <h3 class="main__card-title">${name}</h3>
        <p class="main__card-text">${description}</p>
        <p class="main__card-price"><medium class="text-muted">${price} €</medium></p>
      </div>
    </div>`;
    
    document.querySelector('.main').innerHtml = card;
    }
 })
//  .catch(function(error) {
//   console.log(error);}
}
 getCamera();
