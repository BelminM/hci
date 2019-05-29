var carsState = document.getElementsByClassName("state");

function viewCarsByState() {
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
  viewCarsByPrice();
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

function viewCarsByPrice() {
  var minPrice = document.getElementById("minPrice").value;
  var maxPrice = document.getElementById("maxPrice").value;
  var carPrices = document.getElementsByClassName("car-price");
  minPrice = minPrice.replace("KM ", "");
  minPrice = minPrice.replace(",", "");
  maxPrice = minPrice.replace("KM ", "");
  minPrice = minPrice.replace(",", "");
  for (var i = 0; i < carPrices.length; i++) {
    var carPrice = carPrices[i].innerHTML;
    carPrice = carPrice.replace("KM ", "");
    carPrice = carPrice.replace(",", "");
    carPrice = parseFloat(carPrice);
    // console.log("Car " + carPrice);
    // console.log(minPrice);
    if(carPrice <= minPrice && minPrice != null) {
      var carStates = document.getElementsByClassName("car-state-tag");
      var cars = document.getElementsByClassName("car-list-item");
      cars[i].style.display = "none";
    }
    else {
      console.log("Nemoj");
    }
    if(carPrice <= maxPrice && maxPrice != null)
      console.log("Prikazi");
    else {
      console.log("Nemoj");
    }
  }
}
