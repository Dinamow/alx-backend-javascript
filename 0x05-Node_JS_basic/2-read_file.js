const fs = require('node:fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs.readFileSync(path
    , 'utf-8')
    .split('\n')
    .filter((line) => line.length > 0);
  console.log(`Number of students: ${fileLines.length - 1}`);
  const studentGroups = {};
  fileLines.slice(1).forEach((line) => {
    const student = line.split(',');
    if (!studentGroups[student[3]]) {
      studentGroups[student[3]] = [];
    }
    studentGroups[student[3]].push(student[0]);
  });
  delete studentGroups.field;
  for (const group in studentGroups) {
    if (studentGroups[group].length > 0) {
      console.log(`Number of students in ${group}: ${studentGroups[group].length}. List: ${studentGroups[group].join(', ')}`);
    }
  }
};

module.exports = countStudents;
