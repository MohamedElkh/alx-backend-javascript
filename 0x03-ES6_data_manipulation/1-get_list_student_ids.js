const getListStudentIds = (stud) => {
  let studx = [];

  if (!(stud instanceof Array)) {
    return studx;
  }

  studx = stud.map((student) => student.id);
  return studx;
};

export default getListStudentIds;
