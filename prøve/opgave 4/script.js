function HentAreal (areal){
    return (`Arealet er ${areal}`);

}

var udregn = HentAreal(3 * 2);

document.querySelector("#resultat").innerHTML = udregn;