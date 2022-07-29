/* Advanced Practice 5 */

/**
 * Advanced Practice 5: assign objects to students
 */

function practice_5(students, student_objects) {
  // your code here
  for (let i = 0; i < student_objects.length; i++) {
    for (let x = 0; x < students.length; x++) {
      if (students[x].student_id == student_objects[i].student_id) {
        if (students[x]["Object"] == null) {
          students[x]["Object"] = [student_objects[i].Object];
        } else {
          students[x]["Object"].push(student_objects[i].Object);
        }
      }
    }
  }
  return students;
}

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const student_objects = [
  { student_id: 1, Object: "pen" },
  { student_id: 2, Object: "pen" },
  { student_id: 3, Object: "book" },
  { student_id: 1, Object: "book" },
  { student_id: 3, Object: "phone" },
];

// expected output:
// [
//   { student_id: 1, name: "Arthur", objects: ["pen", "book"] },
//   { student_id: 2, name: "Peter", objects: ["pen"] },
//   { student_id: 3, name: "Molly", objects: ["book", "phone"] },
// ];

console.log(practice_5(students, student_objects));
