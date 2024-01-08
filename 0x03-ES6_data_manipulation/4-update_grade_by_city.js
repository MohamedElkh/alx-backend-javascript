/* eslint-disable */
function updateStudentGradeByCity(studs, city, newGrades) {
  const studx = studs.filter((st) => st.location == city);
  return studx.map((st) => {
    const filterg = newGrades.filter((grade) => grade.studentId === st.id);
    if (filterg.length > 0) {
      return {
        ...st,
	gr: filterg[0].grade,
      };
    }
    return {
      ...st,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity
