let url = `http://localhost:3000/api/cameras`;
// let cameras =  fetch (url);
// let data = cameras.map;

function getCamera (){
fetch(url)
  .then ((data) => data.json())
   .then((data) => {
    
     for (let i=0; i < data.length; i++){
      let name = data[i].name;
      let imageUrl = data[i].imageUrl;
      let description = data[i].description;
      let price = data[i].price /100;
      let id  = data[i]._id;

      let card =`<div class="main__card border border-secondary rounded" >
      <img src="${imageUrl}" class="card-img-top" alt="camera">
     <div class="main__card-body">
        <h3 class="main__card-title text-center">${name}</h3>
        <p class="main__card-text text-justify">${description}</p>
        <p class="main__card-price text-right"><medium class="text-muted">${price} €</medium></p>
      </div>
    </div>`
    
    document.querySelector('.main').innerHTML += card;
     }
    
  })
 
//  .catch(function(error) {
//   console.log(error);}
}
 getCamera();
