let select = document.querySelector(".select");
let option = document.querySelectorAll("option");
let button = document.querySelector("button");
let urlSearch;

const options = {
  method: "GET",
  headers: { "X-Api-Key": "CB3lVZ+BapLpAh1uwCxUYQ==Ql9npZPi8C0mdI4A" },
};

// select.onchange = (e) => {
//   getData(e);
// };

button.onclick = () => {
    getData();
  };

// function getData(e) {
//   urlSearch = e.target.value;
//   console.log(typeof e.target.value);
//   console.log(urlSearch)
//   ///////////////////////////////
//   // fetch api
//   let api = "https://api.api-ninjas.com/v1/nutrition?query=" + urlSearch;

//   fetch(api, options)
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       console.log(response);
//       createTable(response);
//     });

function getData() {
    urlSearch = select.value;
    console.log(typeof select.value);
    console.log(urlSearch)
    ///////////////////////////////
    // fetch api
    let api = "https://api.api-ninjas.com/v1/nutrition?query=" + urlSearch;
  
    fetch(api, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        createTable(response);
      }).catch(err=>{alert('Invalid type of food, try another.')})

  let table = document.querySelector("#table");
  function createTable(response) {
    table.innerHTML = ``;
    let keys = Object.keys(response[0]);
    let values = Object.values(response[0]);

    keys.forEach((element, index) => {
      table.innerHTML += `<tr><td>${element}</td><td>${values[index]}</td></tr>`;
    });
  }
}
