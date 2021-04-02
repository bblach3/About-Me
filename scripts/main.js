let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/class.jpg') {
      myImage.setAttribute('src','images/self.jpeg');
    } else {
      myImage.setAttribute('src','images/class.lpg');
    }
    if(mySrc === 'images/self.jpeg') {
        myImage.setAttribute('src','images/class.jpg');
      } else {
        myImage.setAttribute('src','images/self.jpeg');
      }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my website, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my website, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to my website, ' + myName;
    }
  }