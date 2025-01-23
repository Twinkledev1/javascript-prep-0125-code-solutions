// // create your loops here.
// function whileLoop1() {
//   const newArray = [];
//   let index = 0;
//   while (index <= 9) {
//     newArray.push(index);
//     index++;
//   }
//   return newArray;
// }
// const whileLoop1Result = whileLoop1(4);
// console.log(whileLoop1Result);

// function whileLoop2() {
//   const newArray = [];
//   let index = 0;
//   while (index <= 18) {
//     newArray.push(index);
//     index += 2;
//   }
//   return newArray;
// }
// const whileLoop2Result = whileLoop2();
// console.log(whileLoop2Result);

// function forLoop1() {
//   newArray = [];
//   for(let i = 0; i<10; i++){
//   newArray.push(i);
//   }

//   {
//     return newArray;
//   }
// }
// let forLoop1Result = forLoop1();
// console.log(forLoop1Result);


// function forLoop2() {
//   for (let i = 100; i > 0; i--) {
//     console.log("Time to explosion: " + i);
//   }
// }

// forLoop2();


const person = {
  name: "Ada LoveLace",
  age: "classic",
  hobby: "computation",
  invention: "analytical engine",
}

function forInLoop1(ob){
  newArray =[];
  for(const key in ob) {
      newArray.push(ob[key]);
    }
    return newArray;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);



function forInLoop2(object){
  newArray =[];
  for(const key in object)
  {
    newArray.push(object[key]);
  }
{
  return newArray;
}
const forInLoop2Result = forInLoop2(person);
console.log(InLoop2Result);

}
