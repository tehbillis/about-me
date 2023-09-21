'use strict';

window.onload = function() {
  let correctGuesses = 0;

  let playerName = prompt('What is your name?');
  alert('Hi '+ playerName + ', Let\'s play a guessing game! Please answer using only Yes or No.');

  function q1() {  
    let questionOneGuess = prompt('Do I have red hair?');

    if (questionOneGuess.toLowerCase() === 'y' || questionOneGuess.toLowerCase() === 'yes') {
      //console.log('You are correct!');
      alert('You are correct!');
      correctGuesses+=1;
    } else if (questionOneGuess.toLowerCase() === 'n' || questionOneGuess.toLowerCase() === 'no') {
      //console.log('I\'m sorry, that is not correct.');
      alert('I\'m sorry, that is not correct.');
    } else {
      //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
      alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    }
  }

  q1();

  function q2() {
    let questionTwoGuess = prompt('Was I born in Washington state?');

    if (questionTwoGuess.toLowerCase() === 'y' || questionTwoGuess.toLowerCase() === 'yes') {
      //console.log('I\'m sorry, that is not correct.');
      alert('I\'m sorry, that is not correct');
    } else if (questionTwoGuess.toLowerCase() === 'n' || questionTwoGuess.toLowerCase() === 'no') {
      //console.log('You are correct!');
      alert('You are correct!');
      correctGuesses+=1;
    } else {
      //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
      alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    }
  }

  q2();

  let questionThreeGuess = prompt('Am I a bicycle enthusiast?');

  if (questionThreeGuess.toLowerCase() === 'y' || questionThreeGuess.toLowerCase() === 'yes') {
    //console.log('You are correct!');
    alert('You are correct!');
    correctGuesses+=1;
  } else if (questionThreeGuess.toLowerCase() === 'n' || questionThreeGuess.toLowerCase() === 'no') {
    //console.log('I\'m sorry, that is not correct.');
    alert('I\'m sorry, that is not correct.');
  } else {
    //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
  }

  let questionFourGuess = prompt('Am I a dog lover?');

  if (questionFourGuess.toLowerCase() === 'y' || questionFourGuess.toLowerCase() === 'yes') {
    //console.log('You are correct!');
    alert('You are correct!');
    correctGuesses+=1;
  } else if (questionFourGuess.toLowerCase() === 'n' || questionFourGuess.toLowerCase() === 'no') {
    //console.log('I\'m sorry, that is not correct.');
    alert('I\'m sorry, that is not correct.');
  } else {
    //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
  }

  let questionFiveGuess = prompt('Do I drive trucks for a living?');

  if (questionFiveGuess.toLowerCase() === 'y' || questionFiveGuess.toLowerCase() === 'yes') {
    //console.log('I\'m sorry, that is not correct.');
    alert('I\'m sorry, that is not correct');
  } else if (questionFiveGuess.toLowerCase() === 'n' || questionFiveGuess.toLowerCase() === 'no') {
    //console.log('You are correct!');
    alert('You are correct!');
    correctGuesses+=1;
  } else {
    //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
  }

  //Guess A Number

  const aRandNum = Math.floor(Math.random() * 10) + 1; //Create a random number between 1 and 10. ChatGPT helped me here.

  for (let i = 4; i > 0; i--) {
    let questionSixGuess = prompt('Let\'s try something new. You have ' + i + ' chances to guess the number that i\'m thinking of between 1 and 10');

    if (questionSixGuess == aRandNum) {
      alert('Great job! You guessed it!');
      correctGuesses+=1;
      break;
    } else if(questionSixGuess > aRandNum) {
      alert('Sorry, You guessed too high.');
    } else if (questionSixGuess < aRandNum) {
      alert('Sorry, You guessed too low.');
    } else {
      alert('Sorry, you didn\'t enter a number.');
    }
  }

  //Guess A Brother

  const questionSevenAnswers = ['mel', 'chris', 'john', 'hyrum', 'joe'];
  let questionSevenNames = '';

  for ( let i = questionSevenAnswers.length-1; i >=0; i--) {
    if (i >0) {
      questionSevenNames += (questionSevenAnswers[i] + ', ');
    } else {
      questionSevenNames += questionSevenAnswers[i];
    }
  }

  for (let i = 6; i > 0; i--) {
    let questionSevenGuess = prompt('OK, So I have a bunch of brothers. You have ' + i + ' chances to guess one of their names.').toLowerCase();
    let questionSevenFound = false;

    for ( let x = questionSevenAnswers.length-1; x >=0; x--) {
      if (questionSevenAnswers[x] === questionSevenGuess) {
        questionSevenFound = true;
        break;
      }
    }

    if (questionSevenFound) {
      alert('Great job! you guessed one! Just for future reference my brothers are ' + questionSevenNames + '.');
      correctGuesses+=1;
      break;
    } else {
      if (i !== 1) {
        alert('Sorry, That guy isn\'t my brother.');
      } else {
        alert('Sorry, That guy isn\'t my brother. And you\'re out of chances. Just for future reference my brothers are ' + questionSevenNames + '.');
      }
    }
  }

  alert('Congrats on completing the quiz ' + playerName + ', You\'ve been a great sport, Thank you for playing! Your final score is: ' + correctGuesses);
};
