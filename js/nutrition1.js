import findBMR from "./calculateBMR.js";
let age = document.querySelector("#age");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let gender = document.querySelectorAll("#gender");
let calculateBtn = document.querySelector("button");
let state = document.querySelectorAll("option");
let tableFeilds = document.querySelectorAll("#tablefeild");
let flagScroll = false;
let box = document.querySelector(".box");

let result=0;

calculateBtn.onclick = () => {
  //check if inputs met the requires
  if (
    (age.value >= 15 || age.value <= 85) &&
    height.value >= 120 &&
    weight.value >= 30
  ) {
    flagScroll = true;
    let selectedGender=[gender[0].checked,gender[1].checked]
    findAMR(state,findBMR(age.value,selectedGender,height.value,weight.value))
    fillTable(result);
  }
};

//we included findBMR function to continue the calculations


function findAMR(state,BMR){

  // second calculate the AMR
  //find active state Selected
  let stateName = "";
  state.forEach((ele) => {
    if (ele.selected === true) {
      stateName = ele.value;
    }
  });

  //prepare active state value
  let stateValue = 0;

  if (stateName === "sedentary") {
    stateValue = 1.2;
  } else if (stateName === "light-activity") {
    stateValue = 1.375;
  } else if (stateName === "active") {
    stateValue = 1.55;
  } else if (stateName === "very-active") {
    stateValue = 1.725;
  }
  //AMR value
  let AMR = stateValue * BMR;
  console.log(AMR,BMR)
  result=Math.round(AMR)
  return Math.round(AMR);
}


function fillTable(AMR){
  //fill the calories table

  tableFeilds[0].innerHTML = `${Math.round(
    AMR
  )} <span>100%</span><br /><p>calorie/day</p>`;
  tableFeilds[1].innerHTML = `${Math.round(
    (AMR * 90) / 100
  )} <span>90%</span><br /><p>calorie/day</p>`;
  tableFeilds[2].innerHTML = `${Math.round(
    (AMR * 80) / 100
  )} <span>80%</span><br /><p>calorie/day</p>`;
  tableFeilds[3].innerHTML = `${Math.round(
    (AMR * 61) / 100
  )} <span>61%</span><br /><p>calorie/day</p>`;

  if (flagScroll === true) {
    box.scrollIntoView({ behavior: "smooth" });
  }

    // console.log(BMR, AMR, stateName, stateValue);
}
