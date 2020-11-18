
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


function getPara(_id){
  if(_id === "Outdoors"){
    return "Outdoors it's a website, more like a landing page, for a fictional company that offers tours in the nature. This Website is modern eloquent feel ";
  }
  if(_id === "food-fussion"){
    return "Food Fussion is resturant Website, which servers both Indian and International dishes. This is a multiPage Website. This project have all the cool feature of CSS such as flexbox, grid, etc  ";
  }
  if(_id === "Udemy-landing-page"){
    return "Udemy-landing-page is Udemy clone. This is a Practice Projects just to sharpen my skills. This is a fully Responsive site. ";
  }
  if(_id === "Rock-Paper-Scissors"){
    return "In this project user play Rock, Paper, Scissors against the computer. The game is optimal for any view port width";
  }
  if(_id === "Forkify"){
    return "It is a JavaScript Recipe searching app. This app works with a real API. This app deals with modern JavaScript, Asynchronous function , AJAX Calls, Fetch and much more features."
  }
}

function getsite(_id){
  let Id = _id.toLowerCase();
  console.log(Id);
}
getsite("Outdoors");


let popup = document.getElementById("popup");
const renderPopup = (id) => {
  popup.classList.add("popup-target");
  const markup = `
    <a onclick="popupCloase()" class="popup__close">&times;</a>
    <div class="popup-content">
      <img class="popup-img" src="asset/${id}.png">
      <h1 class="popup-heading">${id}</h1>
      <p class="popup-para">${getPara(id)}</p>
      <div class="popup-icons">
        <a href="https://${getsite(id)}.vercel.app/">
          <figure>
            <img class="popup__icon" src="asset/coding.svg">
            <figcaption>View Code</figcaption>
          </figure>
        </a>
        <a href="#">
          <figure href="#">
            <img class="popup__icon" src="asset/web-site.svg">
            <figcaption>View Site</figcaption>
          </figure>
        </a>
      </div>
    </div>
  `;
  popup.innerHTML = markup;
}

function popupCloase(){
  console.log("hello");
  popup.classList.remove("popup-target");
}