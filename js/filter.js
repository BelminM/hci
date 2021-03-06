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
  viewCarsByManufacturer();
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
  maxPrice = maxPrice.replace("KM ", "");
  maxPrice = maxPrice.replace(",", "");
  for (var i = 0; i < carPrices.length; i++) {
    var carPrice = carPrices[i].innerHTML;
    carPrice = carPrice.replace("KM ", "");
    carPrice = carPrice.replace(",", "");
    carPrice = parseFloat(carPrice);
    // console.log("Car " + carPrice);
    // console.log(minPrice);
    var carStates = document.getElementsByClassName("car-state-tag");
    var cars = document.getElementsByClassName("car-list-item");
    if(!maxPrice && !minPrice) {
      cars[i].style.display = "block";
      break;
    }
    if(carPrice <= minPrice && minPrice)
      cars[i].style.display = "none";

    if(carPrice >= maxPrice && maxPrice)
      cars[i].style.display = "none";
  }
}

function viewCarsByManufacturer() {
  var carNames = document.getElementsByClassName("c-details-mv");
  var cars = document.getElementsByClassName("car-list-item");
  for (var j = 0; j < 11; j++) {
    var id = "manu"+(j+1);
    if(document.getElementById(id).checked) {
      hideNew();
      hideUsed();
      for (var i = 0; i < carNames.length; i++) {
        var carName = carNames[i].innerHTML.toLowerCase();
        var carChecked = document.getElementById(id).value;
        carChecked = carChecked.toLowerCase();
        // console.log(carName);
        // console.log(carChecked);
        if(carName.includes(carChecked)) {
          cars[i].style.display = "block";
        }
      }
    }
  }
}
