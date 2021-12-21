const theOneFunc = () => {};

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds
const fourSecFunc = () => {
  console.log("Hello after 4 seconds");
}
setTimeout(fourSecFun, 4000);
// Hello after 8 seconds
const fourSecFunc = () => {
  console.log("Hello after 8 seconds");
}
setTimeout(fourSecFun, 8000);
// You can define only ONE function
const callFunc = delay => {
  console.log("Hello after " + delay + "seconds");
};
setTimeout(callFunc, 4000, 4);
 setTimeout(callFunc, 8000, 8);
