function calculate(objs) {
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

console.log(calculate({ num1: 2, num2: 3, op: "+" }));
console.log(calculate({ num1: 5, num2: 2, op: "-" }));
console.log(calculate({ num1: 1, num2: 6, op: "*" }));
