var select = document.createElement("select");

for (let i = 1; i < 32; i++){
    var option = document.createElement("option");
    var tekst = document.createTextNode(i);
    option.appendChild(tekst);
    select.appendChild(option);

}

document.body.appendChild(select);
