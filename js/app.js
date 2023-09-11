'use strict';

window.onload = function() {
  let playerName = prompt('What is your name?');
  alert('Hi '+ playerName + ', Let\'s play a guessing game! Please answer using only Yes or No.');

  let questionOneGuess = prompt('Do I have red hair?');

  if (questionOneGuess.toLowerCase() === 'y' || questionOneGuess.toLowerCase() === 'yes') {
    //console.log('You are correct!');
    alert('You are correct!');
  } else if (questionOneGuess.toLowerCase() === 'n' || questionOneGuess.toLowerCase() === 'no') {
    //console.log('I\'m sorry, that is not correct.');
    alert('I\'m sorry, that is not correct.');
  } else {
    //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
  }

  let questionTwoGuess = prompt('Was I born in Washington state?');

  if (questionTwoGuess.toLowerCase() === 'y' || questionTwoGuess.toLowerCase() === 'yes') {
    //console.log('I\'m sorry, that is not correct.');
    alert('I\'m sorry, that is not correct');
  } else if (questionTwoGuess.toLowerCase() === 'n' || questionTwoGuess.toLowerCase() === 'no') {
    //console.log('You are correct!');
    alert('You are correct!');
  } else {
    //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
  }

  let questionThreeGuess = prompt('Am I a bicycle enthusiast?');

  if (questionThreeGuess.toLowerCase() === 'y' || questionThreeGuess.toLowerCase() === 'yes') {
    //console.log('You are correct!');
    alert('You are correct!');
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
  } else {
    //console.log('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
    alert('Oh sorry, You need to answer with a yes, y, no, or n. You get no point on this question.');
  }

  alert('Congrats on completing the quiz' + playerName + ', You\'ve been a great sport, Thank you for playing!');
};
