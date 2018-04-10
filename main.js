console.log('yo!')
document.getElementById('submit').addEventListener("click", searchApp)
let myInput = document.getElementById('input')
let selectedPlanet = "";
// Print to Dom

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
};

const printToDom2 = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

// Dom String Builder

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach(element => {
    domString += `<div class="box-1">`
    domString += `<h1>${element.name}</h1>`
    domString += `<img class="hidden" data-planet-id="${element.name}" src="${element.imageUrl}" alt="planet image">`
    domString += `</div>`
  });
  printToDom(domString, "container-1")
 
};

const planetCard = (planetArr) => {
  let domString = '';
      
      domString += `<div class="box-2">`
      domString += `<button id="ex">X</button>`
      domString += `<h1>${planetArr.name}</h1>`
      domString += `<img id="bigPic"src="${planetArr.imageUrl}" alt="planet image">`
      domString += `<p>${planetArr.description}</p>`
      domString += `</div>`
  printToDom2(domString, "container-1") 
  document.getElementById('ex').addEventListener("click", exButton)
  exButton;
};

// Event Listener

const initHover = () => {
  const planetPic = document.getElementsByClassName('box-1');
  for (let idx = 0; idx < planetPic.length; idx++){
    planetPic[idx].addEventListener("mouseleave", hidePlanets)
  }
};

const planetEventListeners = (planetData) => {
  const planetPic = document.getElementsByClassName('box-1');
  for (let idx = 0; idx < planetPic.length; idx++){
    planetPic[idx].addEventListener("mouseenter", showPlanets)
    planetPic[idx].addEventListener("click", selectPlanet)
  }
};

const hidePlanets = (e) => {
  e.target.children[0].classList.remove("hidden")
  e.target.children[1].classList.add("hidden")
}

const showPlanets = (e) => {
  e.target.children[0].classList.add("hidden")
  e.target.children[1].classList.remove("hidden")
}

const selectPlanet = (e) => {
  selectedPlanet = e.target.dataset.planetId;
  console.log(selectedPlanet)
  startAgain()
}

const exButton = (e) => {
  e.target.parentNode.classList.add("hidden");
  startApp()
}


// Search Bar Lite

const searchBar = (planetArr) => {
  let myInput = document.getElementById(input).value
  if (myInput =  plant.name || planet.description){

  }
}

// XHR Request
let planet = [];

function iLoad () {
  const data = JSON.parse(this.responseText);
  domStringBuilder(data.planets)
  initHover();
  planet.push(data.planets)
  planetEventListeners(data.planets);
};

function planetShow() {
  const data = JSON.parse(this.responseText);
  data.planets.forEach( planet => {
    if (selectedPlanet === planet.name) {
      console.log("success!")
      planetCard(planet)
    }
  })
}


function iFail() {
  console.log("Something went wrong")
};

function startApp() {
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", iLoad);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "/planets.json")
  myRequest.send()
};

function startAgain() {
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", planetShow);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "/planets.json")
  myRequest.send() 
}

function searchApp() {
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", searchShow);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "/planets.json")
  myRequest.send() 

  function searchShow () 
  {
    console.log("1success!")
    
    const data = JSON.parse(this.responseText);
    data.planets.forEach( planet => {
      if (myInput.value === planet.name) {
        console.log("2success!")
        planetCard(planet)
      }
    })
  }
}

startApp()