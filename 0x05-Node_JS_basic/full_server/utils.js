const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const students = {};

  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const noH = lines.slice(1);

        for (let i = 0; i < noH.length; i += 1) {
          if (noH[i]) {
            const fld = noH[i].toString().split(',');

            if (Object.prototype.hasOwnProperty.call(students, fld[3])) {
              students[fld[3]].push(fld[0]);
            } else {
              students[fld[3]] = [fld[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
};
