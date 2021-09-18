while(true) {
    var readlineSync = require('readline-sync');
    const chalk = require('chalk');
    
    // setup the game
    var q = 'Enter your name: '
    var userName = readlineSync.question(q);
    var score = 0;
    var highscore = 9;
    scoreStr = score.toString();
    var count = 0;
    var levelCount =1;
    
    //scoreboard extra variables
    var length = userName.length;
    var dash ="_";
    var space =" ";
    var scoreLength = scoreStr.length + 7;
    var highscoreLength = 12;
    var nameLine = dash.repeat(length);
    var scoreLine = dash.repeat()
    
    console.clear();
    
    
    
    //scoreboard design
    function dashes() {
      console.log(chalk.red("\," + nameLine + "\.     \," + dash.repeat(scoreLength) + "\,      \," + dash.repeat(highscoreLength)) + chalk.red("\,"));
    
    }
    function dashLow(as) {
     console.log(chalk.red("|") + chalk.red(nameLine) + chalk.red("|     |") + chalk.red(dash.repeat(scoreLength)) + chalk.red("|      |") + chalk.red(dash.repeat(highscoreLength)) + chalk.red("|"));
    }
    function scoreEntry() {
      console.log(chalk.red("|") + chalk.red(userName) + chalk.red("|" + "     " + "|") + chalk.red("score: " + score) + chalk.red("|" + "      " + "|") + chalk.red("Highscore: " + highscore) + chalk.red("|"));
    }
    
    //Questions, answers and correct answers stored as objects
    var sample = {
      q1: "question 1",
      q2: "question 2",
      q3: "question 3",
      q4: "question 4",
      q5: "question 5",
      q6: "question 6",
      q7: "question 7",
      q8: "question 8",
      q9: "question 9",
      q10: "question 10",
    }
    var sample2 = { 
      as1 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as2 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as3 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as4 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as5 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as6 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as7 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as8 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as9 : "1. answer 1 \n2. answer 2 \n3. answer 3",
      as10 : "1. answer 1 \n2. answer 2 \n3. answer 3"
    }
    var correct = {
      choice1: 1,
      choice2: 1,
      choice3: 1,
      choice4: 1,
      choice5: 1,
      choice6: 1,
      choice7: 1,
      choice8: 1,
      choice9: 1,
      choice10: 1
    }
    
    // Winner list
    var winners = ['Karthik: 9'];
    
    function dashboard() {
      console.clear();
      dashes();
      scoreEntry();
      dashLow(1);
    }
    
    // Exercise 8 - function to check answer
    function answerCheck(instance) {
      var x = 'choice';
      var check = x.concat(count);
      // Exercise 6 - score incrementation
      if(instance == correct[check]) {
        score += 1;
      }
      if(count === 3) {
        if( score === 3) {
          levelCount+=1;
        } else {
          return false;
        }
      }
      if(score === 6){
        if( count ===6) {
          levelCount+=1;
        } else {
          return false;
        }
      }
    }
    function questions() {
      var q ="q";
      var ans = 'as';
    
    function levelProgress() {
      if(levelCount === 2) {
        if( count === 4){
          console.clear();
          console.log("\n\n\n\n" + chalk.blue.bgWhite.bold("Congratulatons " + userName + ", you have reached level two"))
          if(readlineSync.keyInYN('Do you wish to proceed: Y/N: ')) {
            console.clear();
            dashboard();
          }else {  
            return false;
          }      
        }
      } else if(levelCount === 3) {
        if( count === 7){
          console.clear();
          console.log("\n\n\n\n" + chalk.red.bgBlack.bold("Congratulatons " + userName + ", you have reached level three"))
          if(readlineSync.keyInYN('Do you wish to proceed: Y/N: ')) {
            console.clear();
            dashboard();
          }else {  
            return false;
          }      
        }
      }
    }
    
      // Exercise 11 with input and function follow up -- printed every Items on the object instead of a list
      for(i in sample) {
        dashboard();
        count += 1;
        var num = count;
        var close = levelProgress();
        if(close === false) {
          break;
        }
        console.log("\n\n" +"level " + levelCount);
        console.log( sample[q.concat(num)]);
        console.log("\n\n" + sample2[ans.concat(num)]);
        var choice = readlineSync.question("your choice:");
        var progress = answerCheck(choice);
        if(progress === false) {
          break;
        }
      }
    }
    questions();
    dashboard();
    if(score > highscore) {
      highscore = score;
      winners.unshift(userName + ":" + score);
      console.clear();
      console.log(chalk.red.bgBlack.bold.underline("\n\n\n\n\n\n\n\nHighscores"))
      for(i in winners) {
        console.log(chalk.green.bgBlack.bold(winners[i]));
      }
    }
    }
    