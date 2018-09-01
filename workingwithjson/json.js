const fs = require('fs');
var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);
