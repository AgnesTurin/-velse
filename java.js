console.log(new Date().getHours())

if(new Date().getHours()  < 10 ){
    console.log("Godmorgen")
} else if((new Date().getHours()  < 18 )){
    console.log("Goddag")
} else if((new Date().getHours()  < 24 )){
    console.log("Godaften")  
} else if((new Date().getHours()  < 5 )){
    console.log("Godnat") 
}

