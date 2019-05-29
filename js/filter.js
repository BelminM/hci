var carsState = document.getElementsByClassName("state");

  if(document.getElementById("state3").checked == true) {
    hideNew();
    showUsed();
  } else if(document.getElementById("state2").checked == true) {
      showNew();
      hideUsed();
  } else {
    showNew();
    showUsed();
  }
function hideNew() {
  var carStates = document.getElementsByClassName("car-state-tag");
  var cars = document.getElementsByClassName("car-list-item");
  for (var i = 0; i < cars.length; i++) {
    if(carStates[i].innerHTML == 'New') {
      cars[i].style.display = "none";
    }
  }
}
function hideUsed() {
  var carStates = document.getElementsByClassName("car-state-tag");
  var cars = document.getElementsByClassName("car-list-item");
  for (var i = 0; i < cars.length; i++) {
    if(carStates[i].innerHTML == 'Used') {
      cars[i].style.display = "none";
    }
  }
}
function showUsed() {
  var carStates = document.getElementsByClassName("car-state-tag");
  var cars = document.getElementsByClassName("car-list-item");
  for (var i = 0; i < cars.length; i++) {
    if(carStates[i].innerHTML == 'Used') {
      cars[i].style.display = "block";
    }
  }
}
function showNew() {
  var carStates = document.getElementsByClassName("car-state-tag");
  var cars = document.getElementsByClassName("car-list-item");
  for (var i = 0; i < cars.length; i++) {
    if(carStates[i].innerHTML == 'New') {
      cars[i].style.display = "block";
    }
  }
}
