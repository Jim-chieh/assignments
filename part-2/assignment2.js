function calc(objs) {
  let answer;
  if (objs.op === "+") {
    answer = objs.num1 + objs.num2;
  } else if (objs.op === "-") {
    answer = objs.num1 - objs.num2;
  } else {
    answer = "Not suppoeted";
  }
  return answer;
}

console.log("Assignment2, Calc: ", calc({ num1: 2, num2: 8, op: "+" }));
console.log("Assignment2, Calc: ", calc({ num1: 6, num2: 6, op: "-" }));
console.log("Assignment2, Calc: ", calc({ num1: 2, num2: 8, op: "*" }));
