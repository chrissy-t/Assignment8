/*for (var i=1; i <=10 ; i++)
{
    console.log(i)
}

//1-10 3,6,9

for (var i=3; i <= 9; i+=3){
    console.log(i)
}
*/



var followers=["bob","mark", "jpoetics", "jaedan", "mark", "michael", "mark", "bob","mark", "jpoetics", "jaedan", "mark", "michael", "mark"]

for(var i=0; i < followers.length; i++){ 
if (followers[i] == 'mark' )
    console.log(i)
}

for (var i = 0; i < idCardArray.length; i++){
    if (idCardArray[i].expired) {
      console.log ('denied')
    } else {
      console.log('granted')
    }
    //console.log(idCardArray[i].expired);
  
  }