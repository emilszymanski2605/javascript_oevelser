function adresselabel (fornavn, efternavn, vej, husnummer, postnummer, bynavn) {  
  return  `hej mit navn er ${fornavn} ${efternavn} jeg bor på ${vej} nr ${husnummer} ${postnummer} i ${bynavn}`;
}
    document.addEventListener("DOMContentLoaded", function(event){
    adresselabel('emil', 'szymanski', 'stillegade', '22', '2605', 'brøndby')

});

var adresse = adresselabel('emil', 'szymanski', 'stillegade', '22', '2605', 'brøndby')
document.querySelector("#info").innerHTML=adresse;
// det er en function som udskriver ens adresse 