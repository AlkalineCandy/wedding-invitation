$(document).foundation()

$(document).ready(function() {
  
let changeButton = function() {
    let button = document.querySelector(".translator");
    let buttonAlert = '';


    if (button.textContent == "Same in English"){
        buttonAlert = "Tolmácsot kérek";

    } else {
        buttonAlert = "Same in English";
    }

    button.textContent = buttonAlert; 
}; 


// Slightly modified translating function from Stack Overflow: https://bit.ly/2I5lt57 

    $('.section').each(function() {
     
        var translationDiv = $(this).children('.eng');
        translationDiv.hide(); // Sets initial translation to hide. You can alternatively do this via css such that all .english { display: none; }.
        var originalDiv = $(this).children('.hun'); // Remove if you do not want to hide original text upon toggling
        $(".translator").click(function(e) {
             translationDiv.toggle();
             originalDiv.toggle(); // Remove if you do not want to hide original text upon toggling
             changeButton();
        });
    });
});


