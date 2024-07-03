import { Ui } from "./UI.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

      document.querySelector(".close-icon").addEventListener("click", function(){
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });

      this.getDetails(id);
   }

   getDetails(gameId) {
      const options = {
       method: 'GET',
       headers: {
        'x-rapidapi-key': '1d5bf53553msh0d81719f9f8e45cp1b27f0jsn6c7a05ba1899',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
       }
      };
      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options)
         .then((response) => response.json())
         .then((response) => this.ui.displayDetails(response))
   }
}
