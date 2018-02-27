var ugedage = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag"];

 for (i = 0; i < ugedage.length; i++) { 
    var dage =  ugedage[i]
     console.log(dage);   
 }
// for løkke går starter med sætte i til 0 og så siger den at hvis i(index) er mindre en længten på mit array så skal den + det med 1
// foreach går den igennem alle elementerne og udskriver dem i konsollen 
 ugedage.forEach(function(element) {
     console.log(element);
 });

