const getStudentIdsSum = (studs) => studs.reduce((pre, arr) => pre + arr.id, 0);
export default getStudentIdsSum;
