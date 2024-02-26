const express = require('express');
const { readFile } = require('fs');
const app = express();
const port = 1245;


function countStudents(fileName) {
  const students = {};
  const flds = {};

  let le = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');

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
        output += `Number of students: ${lx}\n`;

        for (const [ky, vl] of Object.entries(flds)) {
          if (ky !== 'field') {
            output += `Number of students in ${ky}: ${vl}. `;
            output += `List: ${students[ky].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}


app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));

  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;
