var BY_FOOT = 25;  //HOUR
var BY_BIKE = 10;  //HOUR
var BY_CAR = 3;    //HOUR

var elForm =document.querySelector('.form');
var elInputEnteredDistance = elForm.querySelector('.input-entered-distace');
var elOutputFoot = document.querySelector('.output-foot');
var elOutputBike = document.querySelector('.output-bike');
var elOutputCar = document.querySelector('.output-car');

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  var EnteredDistance = parseFloat(elInputEnteredDistance.value.trim(), 10);
  
  var resultFoot = EnteredDistance * BY_FOOT;
  var resultBike = EnteredDistance * BY_BIKE;
  var resultCar = EnteredDistance * BY_CAR;
  
  if (isNaN(EnteredDistance)){
    document.querySelector('.right-number').textContent = 'put right number';
  } else if (EnteredDistance >= 0) {
    elOutputFoot.textContent = `${resultFoot} minutes`;
    elOutputBike.textContent = `${resultBike} minutes`;
    elOutputCar.textContent = `${resultCar} minutes`;
  } else {
    document.querySelector('.right-number').textContent = 'l do not know what to say';
  }
})