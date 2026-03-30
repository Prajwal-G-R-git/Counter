let incBtn = document.querySelector("#increment-btn");
let decBtn = document.querySelector("#decrement-btn");
let initialNumber = document.getElementById("h");
let reBtn = document.querySelector("#restart-btn");
// let number = Number(initialNumber.innerHTML);


const STORAGE_KEY = "counterValue";

let number = Number(localStorage.getItem(STORAGE_KEY)) || 0 ;


initialNumber.innerHTML = number ; 




incBtn.addEventListener("click" , function(){

    number = number + 1 ; 
    document.getElementById("h").innerHTML = number;
        
    localStorage.setItem(STORAGE_KEY , number);
    





})
decBtn.addEventListener("click" , function(){

    if(number > 0 )
    number = number - 1 ; 
    document.getElementById("h").innerHTML = number;
    

    localStorage.setItem(STORAGE_KEY , number);

})

reBtn.addEventListener("click" , function(){
    localStorage.removeItem(STORAGE_KEY);
    number = 0 ;
    initialNumber.innerHTML = 0 ;
    
})




