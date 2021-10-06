const balloon = document.getElementById('air-balloon')
const cloudOne= document.getElementById('cloud-one')
const cloudTwo= document.getElementById('cloud-two')
const cloudThree= document.getElementById('cloud-three')
const cloudFour= document.getElementById('cloud-four')
const cloudFive= document.getElementById('cloud-five')


const balloonYFromBotton = 10
balloon.style.bottom = balloonYFromBotton +'%'

function move(){
    //console.log('i have scrolled') - Counts the number of scrolls on the page
   const incrementer = window.scrollY
  // console.log(incrementer)
  balloon.style.bottom = balloonYFromBotton +incrementer * 0.1 +'%'
   //balloon.style.bottom = 10 + incrementer * 0.1 + '%'
                     //starts at 10 - height from bottom value
    cloudOne.style.bottom = 40 + incrementer *0.12 +'%'
    cloudOne.style.left = 75 + incrementer *0.1 +'%'
    cloudTwo.style.bottom = 80 + incrementer *0.12 +'%'
    cloudTwo.style.left = 70 + incrementer *0.1 +'%'
    cloudThree.style.bottom = 60 + incrementer *0.12 +'%'
    cloudThree.style.left = 0 + incrementer * -0.12 +'%'
    cloudFour.style.bottom = 70 + incrementer *0.16 +'%'
    cloudFour.style.left = 20 + incrementer * -0.15 +'%'
    cloudFive.style.bottom = 60 + incrementer *0.2 +'%'
    cloudFive.style.left = 60 + incrementer *0.16 +'%'
}

window.addEventListener('scroll', move)
//Textboxes

const first_name= document.getElementById('fname');
const second_name= document.getElementById('sname');
const line = first_name+'match'+second_name;
const message = document.getElementById('displayMessage');

function countRepeatedWords(sentence) {
    let words = sentence.split("");
    let wordMap = {};
  
    for (let i = 0; i < words.length; i++) {
      let currentWordCount = wordMap[words[i]];
      let count = currentWordCount ? currentWordCount : 0;
      wordMap[words[i]] = count + 1;
    }
    return wordMap;
  }
  function sum(num) {
    var numString = num.toString();
    var newString = "";
    while (numString.length > 1) { // (1)
      newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString(); // (2)
      numString = numString.substring(1, numString.length - 1); // (3)
    }
    newString += numString; // (4)
  
    if (newString.length > 2) { // (5)
      console.log(newString)
      return sum(newString);
    } else {
      return newString;
    }
  }

  //Valid textbox
  function allLetter(texty){
      var letterw = /^[A-Za-z]+$/;
      if(texty.value.match(letters)){
          return true;
      }else{
          alert("Please enter a valid name");
          return false;
      }
  }

  //Getting values + valid
      var firstPlayer = allLetter(document.getElementById('fname'));
      var secondPlayer = allLetter(document.getElementById('sname'));
      var comLine = firstPlayer+'matches'+secondPlayer;
  
      function testResults(){
      var totalNumber = countRepeatedWords(comLine);

      var percentage = sum(totalNumber);

      if(percentage > 80){
          message = 'Good match';
      }


  }
