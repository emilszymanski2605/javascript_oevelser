
let date = new Date();
let aarstal = date.getFullYear();


var select = document.createElement("select");
for (let i = aarstal; i > aarstal - 31; i--){
    var option = document.createElement("option");
    var tekst = document.createTextNode(i);
    option.appendChild(tekst);
    select.appendChild(option);

}


document.body.appendChild(select);
