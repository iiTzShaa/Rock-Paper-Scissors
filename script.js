function playRound(playerSelection, computerSelection)
 {
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        return "You Win";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper") 
    {
        return "You Win";
    }
    else if(playerSelection == "paper" && computerSelection == "rock") 
    {
        return "You Win";
    }
    else
    return "You Lose";

  }
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
  function game()
  {
    let player1 = 0;
    let player2 = 0;
    let result ;
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    for(let i = 0; i <5;i++)
    {
        if (playRound(playerSelection, computerSelection) =="You Win")
        {
            player1++;

        }
        else 
        player2++;
    }
    result = player1 > player2 ? "Player 1": "Player 2"
    console.log("The winner is " + result);
  }
   
  game();

