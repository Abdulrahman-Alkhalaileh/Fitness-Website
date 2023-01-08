export default function findBMR(age,gender,height,weight) {
    //first calculate the BMR
  
    let BMR;
    if (gender[0] === true) {
      BMR =
        66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
    }
    if (gender[1] === true) {
      BMR =
        655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }
    console.log(BMR)
    return BMR;
  }