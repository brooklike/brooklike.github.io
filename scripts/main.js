let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.jpeg") {
    myImage.setAttribute("src", "images/frog.png");
  } else {
    myImage.setAttribute("src", "images/cat.jpeg");
  }
};

let myButton = document.querySelector("button");
function setUserName() {
  let myName = prompt("Please input your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
