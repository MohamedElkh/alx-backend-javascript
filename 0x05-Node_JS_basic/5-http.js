const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
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
        let outp = '';
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
        outp += `Number of students: ${lx}\n`;

        for (const [ky, vl] of Object.entries(flds)) {
          if (ky !== 'field') {
            outp += `Number of students in ${ky}: ${vl}. `;
            outp += `List: ${students[ky].join(', ')}\n`;
          }
        }
        resolve(outp);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(process.argv[2].toString()).then((outp) => {
      const outString = outp.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
