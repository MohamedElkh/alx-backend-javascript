const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const flds = {};

  let le = 0;

  try {
    const fileConts = fs.readFileSync(fileName, 'utf-8');
    const lis = fileConts.toString().split('\n');

    for (let i = 0; i < lis.length; i += 1) {
      if (lis[i]) {
        le += 1;

        const fld = lis[i].toString().split(',');

        if (Object.prototype.hasOwnProperty.call(students, fld[3])) {
          students[fld[3]].push(fld[0]);
        } else {
          students[fld[3]] = [fld[0]];
        }

        if (Object.prototype.hasOwnProperty.call(flds, fld[3])) {
          flds[fld[3]] += 1;
        } else {
          flds[fld[3]] = 1;
        }
      }
    }

    const lx = le - 1;
    console.log(`Number of students: ${lx}`);

    for (const [ky, vl] of Object.entries(flds)) {
      if (ky !== 'field') {
        console.log(`Number of students in ${ky}: ${vl}. List: ${students[ky].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
