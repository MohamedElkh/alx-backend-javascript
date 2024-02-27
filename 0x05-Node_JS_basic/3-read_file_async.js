const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const flds = {};

  let le = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lis = data.toString().split('\n');
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
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
