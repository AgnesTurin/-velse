const snaps = document.querySelector("#snaps")

const fanta = document.querySelector("#fanta")

const cola = document.querySelector("#cola")

const øl = document.querySelector("#øl")


øl.addEventListener("click", tjek);
snaps.addEventListener("click", tjek);
cola.addEventListener("click", tjek);
fanta.addEventListener("click", tjek);


function click(){
    console.log(this.alt);
    if (this.alt=="øl"|| this.alt=="snaps"){
        console.log("indeholder alkohol");
    } 
    else {
      console.log("Alkoholfri")
    }
}