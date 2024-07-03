export class Ui{

 displayGames(data){
   let box=``;
   for(let i=0; i<data.length ; i++){
     box+=`
     <div class="col-xl-3 col-lg-4 col-md-6">
      <div data-id="${data[i].id}" class="card h-100 bg-transparent">
         <div class="card-body">
            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}">
            </figure>
            <figcaption>
               <div class="hstack justify-content-between">
                  <h3 class="h6 small text-white">${data[i].title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>
               <p class="card-text small text-center text-secondary fw-bolder">
                   ${data[i].short_description.split(" ", 8)}
               </p>
            </figcaption>
         </div>
         <footer class="card-footer small hstack justify-content-between">
            <span class="badge badge-color">${data[i].genre}</span>
            <span class="badge badge-color">${data[i].platform}</span>
         </footer>
      </div>
     </div>  `
   }
   document.getElementById("gameData").innerHTML = box;
 }

 displayDetails(data){
   let box =`
   <div class="col-md-4">
     <figure>
      <img src="${data.thumbnail}" alt="game-photo">
     </figure>
    </div>
    <div class="col-md-8">
     <div class="game-details">
         <h3 class="text-white fw-medium">Title: <span> ${data.title}</span></h3>
         <p  class="text-white fw-medium">Category: <span class="badge text-bg-info text-black">${data.genre}</span></p>
         <p  class="text-white fw-medium">Platform: <span class="badge text-bg-info text-black">${data.platform}</span></p>
         <p  class="text-white fw-medium">Status: <span class="badge text-bg-info text-black">${data.status}</span></p>
         <p  class="text-white fw-medium">${data.description}</p>
         <a  class="btn btn-outline-warning" target="_blank" href="${data.game_url}">
          show game
         </a>
     </div>
    </div>`
    document.getElementById("gameDetails").innerHTML = box;

 }

}