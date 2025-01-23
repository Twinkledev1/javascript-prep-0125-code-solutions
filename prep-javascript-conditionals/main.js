// /* Your JS goes in this file */

// //Define a function named isAdult:
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
// // Test the isAdult function:
const isAdultResult = isAdult();
console.log(isAdultResult);

// // Define a function named didStudentPass:
function didStudentPass(score){
  if (score >=70){
    return true;
  }
  else {return false;
}
}
const didStudentPassResult = didStudentPass(79);
console.log(didStudentPassResult);


// //Define a function named gradeCalculator:

function gradeCalculator(score){
  if (score < 60) {
    return "F";
  } else if (score < 70) {
    return "D";
  } else if (score < 80) {
    return "C";
  } else if (score < 90) {
    return "B";
  } else if (score < 100) {
    return "A";
  } else if (score > 100) {
    return "A++";
  }
}
const gradeCalculatorResult = gradeCalculator(119)
console.log(gradeCalculatorResult);

function seasonMessenger(season){
  if (season === 'summer'){
    return "it is hot today";
  }
  else if (season === 'spring'){
    return 'the flowers are blooming';
  }
  else if (season === 'autumn'){
    return 'the leaves are changing colors';
  }
  else if (season === 'winter'){
    return 'it is cold today';
  }
  else {
    return 'please enter a valid season';
  }
}
const seasonMessengerResult = seasonMessenger("spring");
console.log(seasonMessengerResult);


function dayDetector(dayOfTheWeek){
  if (dayOfTheWeek ==='Saturday' || dayOfTheWeek ==='Sunday'){
    return 'have a good weekend';}
  else {
    return "it is a weekday";
  }
}

const dayDetectorResult = dayDetector('Saturday')
console.log(dayDetectorResult);


