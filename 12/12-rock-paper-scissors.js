let computerMove;
      let playerMove;
      let score = JSON.parse(localStorage.getItem('score')); // get score from the storage using parse
      

      if (!score) { // using short conditions to optimize code
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }

     

      function updateScore() { // function to update score at each round
        document.querySelector('.score-text')
          .innerHTML = `wins: ${score.wins}, 
          losses: ${score.losses}, ties: ${score.ties}`;
      }

      updateScore();
      

      function resetScore() { //Reset score button
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScore();
      }
      
      
      function setComputerMove() {
        const choice = Math.random();

        if (choice >= 0 && choice < 1/3) {
          computerMove = 'rock';
        } else if (choice >= 1/3 && choice < 2/3){
          computerMove = 'paper';
        } else if (choice >= 2/3 && choice < 1){
          computerMove = 'scissors';
        }
        return computerMove;
      }

      function gameStarted(playerMove) { // game started when player click one move.
        const computerMove = setComputerMove();
        
        if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result ='You win!';
            score.wins += 1;
          }
          else if (computerMove === 'paper') {
            result ='Tie!';
            score.ties += 1;
          }
          else if (computerMove === 'scissors') {
            result ='You lose!';
            score.losses += 1;
          }
        }

        if (playerMove === 'rock') {
          if (computerMove === 'rock') {
              result ='Tie!';
              score.ties += 1;
            } else if (computerMove === 'paper') {
              result ='You lose!';
              score.losses += 1;
            } else if (computerMove === 'scissors') {
              result ='You win!'
              score.wins += 1;
          }
        }

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
                result = 'You lose!';
                score.losses += 1;
            } else if (computerMove === 'paper') {
                result = 'You win!';
                score.wins += 1;
            } else if (computerMove === 'scissors') {
                result = 'Tie!';
                score.ties += 1;
          }
        }
    
      
      document.querySelector('.result-text')
          .innerHTML = result;
      document.querySelector('.moves-text')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-img"> - <img src="images/${computerMove}-emoji.png" class="move-img"> Computer.`

      updateScore();

      localStorage.setItem('score', JSON.stringify(score));
      }