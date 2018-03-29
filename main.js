console.log('yo!')

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