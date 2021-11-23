//create object for ID Card
function idCard(expieryDate){
  this.expieryDate = new Date(expieryDate);
  this.today = new Date();
  this.checkExpiration = function() {
     var difference = this.today.getTime() - this.expiration.getTime();
     var sign = Math.sign(difference);
     if (sign == -1) {
       return false;
     } else if (sign == 1) {
       return true;
     };
   }
   this.expiration = this.checkExpiration();
 }
  function idCard(patronName){
    this.name =patronName;
  }

var customer1 = new idCard('Bella Loca Swan', '2025-02-08');
var customer2 = new idCard('Edward Cullen', '2022-09-02');
var customer3 = new idCard('Jacob Black', '2011-10-25');
var customer4 = new idCard('Jasper Hale', '2021-12-22');

 var idCardArray = [customer1, customer2, customer3, customer4];



 function makeTableHTML(idCardArray) {
     var result = "<table border=1>";
     for(var i=0; i<idCardArray.length; i++) {
         result += "<tr>";
         for(var j=0; j<idCardArray[i].length; j++){
             result += "<td>"+idCardArray[i][j]+"</td>";
         }
         result += "</tr>";
     }
     result += "</table>";

     return result;
 }



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

var date = vaccineCard.getDifference();
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
