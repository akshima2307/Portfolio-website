
//Navigation Section
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




//Projects Section
//Excute the function and show all columns
displayProjects("all");

function toogleActiveClass(c){
    var btn = document.getElementsByClassName("btn");
    console.log(btn);
    //btn[i].className.split("-")[1]
        
        for(let i = 0; i<btn.length; i++)
            btn[i].className.split("-")[1] === c ? btn[i].classList.add('active')  : btn[i].classList.remove('active');
            
}


function displayProjects(c){
    var x = document.getElementsByClassName("projects__container");
    if(c === 'all'){
        for(let i = 0; i<x.length; i++){
            x[i].style.display = 'flex';
        }
    }else{
        for(let i = 0; i<x.length; i++)
            x[i].className.split("-")[1] === c ? x[i].style.display = 'flex' : x[i].style.display = 'none';
    }
}



//PopUp

var popup = document.getElementById("popup");

function displayPopup(id){
  if(id === "Outdoors"){
    
  }
}
