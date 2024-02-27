const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const outp = [];

      outp.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();

      for (let i = 0; i < keys.length; i += 1) {
        outp.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
      }
      res.status(200).send(outp.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const fld = request.params.major;

    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(fld in students)) {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        res.status(200).send(`List: ${students[fld].join(', ')}`);
      }
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
