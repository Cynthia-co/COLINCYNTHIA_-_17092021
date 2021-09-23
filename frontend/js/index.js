let url = `http://localhost:3000/api/cameras`;
let data = 

function getCamera(){
fetch(url)
    .then ((response) => 
        response.json().then((data) => console.log(data)));
    .then ((data) ==>
  for (let i=0; i < data.length; i++){
      let name = data[i].name;
      let imageUrl = data[i].imageUrl;
      let description = data[i].description;
      let price = data[i].price;
      let id  = data[i]._id;

      let card =
      `<div class="card">
      <img src="${imageUrl}" class="card-img-top" alt="camera">
     <div class="card-body">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${description}</p>
        <p class="card-price"><medium class="text-muted">${price} €</medium></p>
      </div>
    </div>`

    document.querySelector('main').innerHtml += card;
    
 }
//  .catch(function(error) {
//   console.log(error);}
 }

getCamera();