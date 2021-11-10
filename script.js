//should i put forhead gun object??


var vaccinated = true;
var name = 'Dude,';
var message = 'Hello ' + name + ' Vaccination card approved. Welcome to Dp Cakery!';

var element = document.getElementById('boba');

element.textContent = message;
console.log (message);

//vaccination card object

var vaccineCard= {
  nameofPatron: 'Steve Rogers',
  nameofVaccine: 'Sinopharm',
  age: '101',
  secondDosage: new Date('Nov 8, 2021 02:00:00'),
  fullyVaccinated : true,


//method to check if patron is not fully vaccinated

getDifference: function(){
  var today = new Date();
  var difference = today.getTime () - vaccineCard.secondDosage.getTime();
  difference = Math.floor(difference / 84600000);
  return difference;
}

};

var date = vaccineCard.checkDifference();
var daysLeft = 14 - date;

if(vaccineCard.fullyVaccinated == true) {
  if(date >=14) {
    var message = document.getElementById("message");
   message.textContent = "Thank you for being Fully Vaccinated! Have some boba.";
 }
 else {
 var message = document.getElementById("message");
 message.textContent = "There's " + daysLeft + " days until you are fully vaccinated.";
}
} else { var message = document.getElementById("message");
    message.textContent= "You are not Vaccinated. Shame on you.";
}
