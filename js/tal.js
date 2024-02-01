const knap = document.querySelector("#guessButton");
knap.addEventListener("click", test);

let tal = Math.floor(Math.random() * 11);

function test() {
    console.log(tal);
    const input = document.querySelector("#tal").value;
    if (tal == input) {
        const response = prompt(input + " er rigtigt! Vil du prøve med et nyt tal?");
        if (response) {
            tal = Math.floor(Math.random() * 10);
        }
    } else if (input < tal) {
        // Handling for input mindre end tal
    } else {
        alert(input + " er for højt! Prøv igen.");
    }
}