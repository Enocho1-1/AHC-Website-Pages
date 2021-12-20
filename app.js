
//Show Tracker Button
const showBtn = document.querySelector('#trackBtn');

//Tracker Div
const tracker = document.querySelector('#tracker');

//Arm UI Elements 
const armInput = document.querySelector('#armInput'),
      armRadio = document.querySelector('.armRadio'),
      selectOne = document.querySelector('.select-1');

//Leg UI Elements
const legInput = document.querySelector('#legInput'),
      legRadio = document.querySelector('.legRadio'),
      selectTwo = document.querySelector('.select-2');

//Hand UI Elements
const handInput = document.querySelector('#handInput'),
      handRadio = document.querySelector('.handRadio'),
      selectThree = document.querySelector('.select-3');

//Trigger Yes/No Checkbox
const radioYes = document.querySelector('#yesRadio').addEventListener('click', function(){
  triggerBoxes.style.display = 'block';
}),
radioNo = document.querySelector('#noRadio').addEventListener('click', function(){
  triggerBoxes.style.display = 'none'; 
});

//Medication Yes/No Checkbox
const yesRadio2 = document.querySelector('#yesRadio2').addEventListener('click', function() {
  medTrig.style.display = 'block'; 
}),
noRadio2 = document.querySelector('#noRadio2').addEventListener('click', function() {
  medTrig.style.display = 'none';  
});
const medTrig = document.querySelector('#medicationCheckbox');
const triggerBoxes = document.querySelector('#triggerCheckBox');

//Show Button Event Listener
showBtn.addEventListener('click', revealTracker);

//Show Button Call Back Function
function revealTracker(){
  if(tracker.style.display === 'block'){
    showBtn.textContent = 'Show Tracker';
    tracker.style.display = 'none';
  }else {
    showBtn.textContent = 'Hide Tracker';
    tracker.style.display = 'block';
  }
}


//Arm Button Event Listener
armInput.addEventListener('keyup', revealArmRadio);
//Arm Call Back Function
function revealArmRadio(){
    if(armInput.value == ''){
      selectOne.style.display = 'block';
    } else if(armInput.value == 1){
      armRadio.style.display = 'block';
    } else if(armInput.value == 0){
      selectOne.style.display = 'none';
    } else{
      armRadio.style.display = 'none';
    }
  }

//Leg Button Event Listener
legInput.addEventListener('keyup', revealLegRadio);
//Leg Call Back Function
function revealLegRadio(){
  if(legInput.value == ''){
    selectTwo.style.display = 'block';
  } else if(legInput.value == 1){
    legRadio.style.display = 'block';
  } else if(legInput.value == 0){
    selectTwo.style.display = 'none';
  } else{
    legRadio.style.display = 'none';
  }
}

//Hand Button Event Listener
handInput.addEventListener('keyup', revealHandRadio);
//Hand Call Back Function
function revealHandRadio(){
  if(handInput.value == ''){
    selectThree.style.display = 'none';
  }else if(handInput.value == 1){
    handRadio.style.display = 'block';
  } else if(handInput.value == 0){
    selectThree.style.display = 'none';
  }
  else{
    handRadio.style.display = 'none';
  }
}

