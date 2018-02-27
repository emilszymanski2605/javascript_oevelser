var navn = { "fornavn":"John", "efternavn":"Hendrix"};
for (x in navn) {
   document.getElementById("udskriv").innerHTML += navn[x] += ' ';
}