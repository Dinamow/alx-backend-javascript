export default function getStudentIdsSum(students) {
  return students.map((student) => student.id).reduce((a, b) => a + b, 0);
}
