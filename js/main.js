//hamburger menu
const hamburgerButton = document.querySelector(".mobile-nav-toggle");
hamburgerButton.addEventListener("click", showMobileNav);

//destination tab buttons
const destinationButton = document.querySelectorAll(".destination-button");
destinationButton.forEach(element => {
    element.addEventListener("click", changeDestination)
});

// crew tab buttons
const crewButton = document.querySelectorAll(".dot-button");
crewButton.forEach(element => {
    element.addEventListener("click", changeCrew)
});

// technology buttons
const technologyButton = document.querySelectorAll(".technology-button")
technologyButton.forEach(element => {
    element.addEventListener("click", changeTechnology)
});



// when clicked on hamburger toggle nav 
function showMobileNav(){
    const primaryNav = document.querySelector(".primary-navigation")
    // hamburger switches between x / hamburger 
    hamburgerButton.classList.toggle("active");
    
    primaryNav.classList.toggle("active");
}

// changes destination information
function changeDestination (e){
    // updates destination information
    changeDestinationItems(e)
  // first value = element , 2nd value can hold tablist buttons
  // make this so you can also use it for dot list
   changeUnderline(e,destinationButton);
}

// changes crew information
function changeCrew(e){
    changeUnderline(e,crewButton)
    changeCrewItems(e)
}

function changeTechnology(e){
    changeUnderline(e,technologyButton)
    changeTechnologyItems(e)
}



// switches underline to clicked target and removes from active target
function changeUnderline(e,button){
   let item = e.target.getAttribute("aria-selected");

   if(item !== "true"){
    button.forEach(e => e.setAttribute("aria-selected", false))
    e.target.setAttribute("aria-selected", true);
   }  
}

// updates screen information on destination site
function changeDestinationItems(e){
    let id = e.target.id;

    fetch("./data.json")
    .then(res => res.json())
    .then(data =>{
        // changes img
        document.querySelector("#main > img").src = data.destinations[id].images.png;
        // changes titlte
        document.querySelector("#main > article > h2").innerHTML = data.destinations[id].name;
        // changes description
        document.querySelector("#main > article > p").innerHTML = data.destinations[id].description;
        // changes distance
        document.querySelector("#main > article > div > div:nth-child(1) > p").innerHTML = data.destinations[id].distance;
        // changes time to travel
        document.querySelector("#main > article > div > div:nth-child(2) > p").innerHTML = data.destinations[id].travel;
    })
}


// updates screen information on crew site
function changeCrewItems(e){
    let id = e.target.id;

    fetch("./data.json")
    .then(res => res.json())
    .then(data =>{
        // changes img
        document.querySelector("#main > img").src = data.crew[id].images.png;
        //changes role
        document.querySelector("#main > article > header > h2").innerHTML = data.crew[id].role;
        // changes name
        document.querySelector("#main > article > header > p").innerHTML = data.crew[id].name;
        // changes bio
        document.querySelector("#main > article > p").innerHTML = data.crew[id].bio;
    })
}

// updates screen information on technology site
function changeTechnologyItems(e){
    let id = e.target.id;
    fetch("./data.json")
    .then(res => res.json())
    .then(data =>{
        //change portrait
         document.querySelector("#main > picture > source").srcset =data.technology[id].images.portrait || "";
        // changes landscape
         document.querySelector("#main > picture > img").src = data.technology[id].images.landscape || "";
        // changes name
        document.querySelector("#main > article > header > p").innerHTML = data.technology[id].name;
        // changes bio
        document.querySelector("#main > article > p").innerHTML = data.technology[id].description;
    })
}


