import { Details } from "./details.js";
import { Ui } from "./UI.js";

export class Games {
 constructor() {
  this.getGames("mmorpg");

  document.querySelectorAll(".nav-item a").forEach((link) => {
     link.addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.textContent.toLowerCase());

     });
  });

  this.ui = new Ui();
 }

 async getGames(category) {
  const options = {
     method: 'GET',
     headers: {
      'x-rapidapi-key': '1d5bf53553msh0d81719f9f8e45cp1b27f0jsn6c7a05ba1899',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
     }
  };
  let api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
  let response=await api.json();

  this.ui.displayGames(response);
  this.getGameId();
 }

 getGameId() {
  document.querySelectorAll(".card").forEach((item) => {
     item.addEventListener("click", () => {
        let id = item.dataset.id;
        this.showDetails(id);
     });
  });
 }

 showDetails(gameId) {
  let details = new Details(gameId);
  document.querySelector(".games").classList.add("d-none");
  document.querySelector(".details").classList.remove("d-none");
 }
}