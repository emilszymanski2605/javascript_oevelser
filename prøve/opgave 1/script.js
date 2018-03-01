function sammelign(tekst1, tekst2){
    // den sammenligner om de er ens og hvis de er så skal den console log fuldført ellers console log fejl
if (tekst1 == tekst2){
    return true
}else{
    return false
}
}
// opgave 1
// let test = sammelign("lala", "lalsa");

// if(test == true){
//     console.log(test);
// }else{
//     console.log();
// }

// opgave 1.2
let formular = document.querySelector("#formular");
let tekst1 = document.querySelector("#l1")
let tekst2 = document.querySelector("#l2")

document.querySelector("#udskrift").addEventListener("click", (event) => {
    event.preventDefault();
    let test = sammelign(tekst1.value, tekst2.value);
    if(test == true){
    document.querySelector("#text").innerHTML = "De er ens";
    }else{
        document.querySelector("#text").innerHTML = "De er ikke ens";
    }
});