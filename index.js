function showAlert(message, type = "error") {
  const alertDiv = document.querySelector("#alert");

  // Set the text and class based on the type
  alertDiv.textContent = message;
  alertDiv.className = `alert show ${type === "success" ? "success" : ""}`;

  // Automatically hide the alert after 3 seconds
  setTimeout(() => {
    alertDiv.classList.remove("show");
  }, 3000);
}


// Here I'm creatin a team builder
function create(){
  let players = document.querySelector("textarea#team").value.trim();
  if (!players) {
    showAlert("Please enter player names!");
    return;
  }

  // Convert names into an array
  const arrPlayers = players.split(" ");

  function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
  }
  
  if (hasDuplicates(arrPlayers)) {
    showAlert("Duplicate player names found. Please ensure all players have unique names.");
    return;
  }
  
  const playersNum = arrPlayers.length; // Array size

  // Team size
  let size = Number(document.querySelector('select#size').value);

  // Ensure the team size is valid
  if (size < 1 || size > playersNum) {
    showAlert("Please select a valid team size!");
    return;
  }

  // Amount of teams
  const numberOfTeam = Math.ceil(playersNum / size); 

  // Creating array of teams
  let teams = Array.from({ length: numberOfTeam }, () => []);
  
  // Function to check if a player is in a team
  function isInATeamFun(name) {
    // Loop over the teams
    for (let i = 0; i < teams.length; i++) { 
      if (teams[i].includes(name)) { //Checking if player is in teams[i] 
        return true;
      }
    }
    return false; // Return false if player name isn't there
  }

  //Counter to know how many players are in a team
  let counterPlayerInTeam = 0;

  function teamBuilder(team) {
    while (team.length < size && counterPlayerInTeam < playersNum) {
      let randomNumber = Math.floor((Math.random() * playersNum)); //Random player index
      let player = arrPlayers[randomNumber];
      
      // Check if player is already in a team if not he is assigned to a team
      if (!isInATeamFun(player)) {
        team.push(player); 
        counterPlayerInTeam++;
      }
    }
  }
  
  //Team builder
  for (let i = 0; i < numberOfTeam; i++) {
    teamBuilder(teams[i])
  }

  console.log("Teams:", teams);

  let response = document.querySelector('div#out');

  response.innerHTML = `${teams.map((team, index) => `<p>Team ${index + 1}: ${team.join(", ")}</p>`).join("<br>")}`;

  
  response.innerHTML = teams
  .map(
    (team, index) =>
      `<p>Team ${index + 1}: <span>${team.join(", ")}</span></p>`
  )
  .join(""); 

  showAlert("Teams successfully created!", "success");
}