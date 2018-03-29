console.log('yo!')

// Dom String Builder

const domStringBuilder = (arrayHere) => {
  let domString = '';
  arrayHere.forEach(element => {
    domString += `<div class="box-1">`
    domString += `<h1>${element.name}</h1>`
    domString += `</div>`
  });
  printToDom(domString, "container-1")
}

// XHR Request

function iLoad () {
  const data = JSON.parse(this.responseText);
};

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

startApp()