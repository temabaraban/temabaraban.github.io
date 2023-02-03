var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

var changeUserNameButton = document.querySelector("#change-user-button");
var resetUserNameButton = document.querySelector("#reset-user-button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

function resetUserName() {
  myHeading.textContent = "Mozilla is cool";
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

changeUserNameButton.onclick = function () {
  setUserName();
};

resetUserNameButton.onclick = function () {
  resetUserName();
};
