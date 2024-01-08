function getStudentsByLocation(studs, city) {
  return studs.filter((st) => st.location === city);
}

export default getStudentsByLocation;
