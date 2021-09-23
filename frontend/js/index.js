let url = `http://localhost:3000/api/cameras`;
let camera;


fetch(url)
    .then ((response) => 
        response.json().then((data) => console.log(data)));
    
function getCamera() {
   
  for (let i=0; i < 5; i++){
      let name = i.name;
      let imageUrl = i.imageUrl;
      let description = i.description;
      let price = i.price;
      let id  = i._id;

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