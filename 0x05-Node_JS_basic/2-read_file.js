const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const flds = {};

  let le = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        le += 1;

        const fld = lines[i].toString().split(',');

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
