var alletal = document.querySelector('#alletal');
var åretsmåned = document.querySelector('#året')
var tal = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
// her har jeg lavet en selector hvor den selector min liste i mit html og udskriver talene og månederne 
tal.forEach(function(element) {
    alletal.innerHTML += (element) += "<br>"
});


var måned = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktobor', 'november', 'december']

for (i = 0; i < måned.length; i++) { 
    var månederne =  måned[i]
    åretsmåned.innerHTML += månederne += "<br>" 
      
 }


 