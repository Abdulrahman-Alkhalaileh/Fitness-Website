import { workoutObject } from "./workoutInformation.js";

let bodyAnatomy = document.querySelector(".anatomy");
let workoutContainer = document.querySelector(".workout-container");
let muscleName = document
  .querySelector(".workout-details")
  .querySelector("span");

// Call function that Creates exercises****************************
// Call function that shows the muscle description ****************
bodyAnatomy.onclick = (e) => {
  if (e.target.id != "") {
    showMuscle(e);
    createExersise(e);

    //scroll the page down to see the exercise section
    muscleName.scrollIntoView({ behavior: "smooth" });
  }
};

// create exercises function
function createExersise(e) {
  let name = e.target.className;

  //first we need to remove all existed exercises
  while (workoutContainer.firstChild) {
    workoutContainer.removeChild(workoutContainer.firstChild);
  }

  //create div elements(workouts)
  for (let i = 0; i < Number(e.target.id); i++) {
    // the workout div
    let workout = document.createElement("div");
    workout.setAttribute("class", "workout");
    workoutContainer.appendChild(workout);

    //workout description inside the workout div
    let workoutDesc = document.createElement("div");
    workoutDesc.setAttribute("class", "workout-description");
    workout.appendChild(workoutDesc);

    // heading of workout description
    let workoutTitle = document.createElement("h1");
    workoutTitle.setAttribute("class", "title");
    workoutTitle.innerHTML = workoutObject[name].title[i];
    workoutDesc.appendChild(workoutTitle);

    //last child of workout description
    let gif = document.createElement("div");
    gif.setAttribute("class", "gif");
    workout.appendChild(gif);
    let gifImg = document.createElement("img");
    gifImg.src = workoutObject[name].gif[i];
    gif.appendChild(gifImg);

    //change the muscle name to fit the content
    muscleName.innerHTML = e.target.className;
  }
}

//put muscles div in an array
let muscleDescription = document.querySelectorAll(".muscle-description");

//show the targetted muscle div
function showMuscle(e) {
  // hide all the previous muscle divs
  for (let i = 0; i < muscleDescription.length; i++) {
    muscleDescription[i].style = "display:none";
  }

  //show the targetted muscle div
  for (let i = 0; i < muscleDescription.length; i++) {
    if (muscleDescription[i].id === e.target.className) {
      muscleDescription[i].style = "display:flex";
    }
  }
}

//For test purpose we will export the main function (showMuscle)