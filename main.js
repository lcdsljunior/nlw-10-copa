function createGame(player1,hour,player2){
  return `
    <li>
      <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = 0.4;
function createCard(date,day,games) {
  delay = delay + 0.4;
  return `
      <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
           <ul>
           ${games}
           </ul>
          </div>
  `
} 

document.querySelector("#cards").innerHTML = 
      
      createCard(
        "24/11",
        "quinta-feira",
          createGame("suica", "07:00", "camaroes") +
          createGame("portugual", "13:00", "gana") +
          createGame("brasil", "16:00", "servia")
      ) +
      createCard(
        "28/11",
        "segunda-feira",
          createGame("camaroes", "07:00", "servia") +
          createGame("brasil", "13:00", "suica") +
          createGame("portugual", "16:00", "uruguay")
      ) +
      createCard(
        "02/11",
        "sexta-feira",
          createGame("gana", "12:00", "uruguay") +
          createGame("servia", "16:00", "suica") +
          createGame("camaroes", "16:00", "brasil")
      )

