let monedsNavne = ['Januar', 'Februar', 'Marts', 'April', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

var select = document.createElement("select");

for (let i = 0; i < monedsNavne.length; i++){
    var option = document.createElement("option");
    var tekst = document.createTextNode(i + ' ' + monedsNavne[i]);
    option.appendChild(tekst);
    select.appendChild(option);

}

document.body.appendChild(select);
