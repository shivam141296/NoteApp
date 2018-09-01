console.log('Starting app.js');

const fs= require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv=yargs.argv;
var command=argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Node created');
    notes.logNote(note);
  }
  else{
    console.log('Node already exists');
  }
} else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes:`);
  allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read'){
  var readNote = notes.getNote(argv.title);
  if(readNote){
    console.log('Node Found');
    notes.logNote(readNote);
  }
  else{
    console.log('Node not Found');
  }
} else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognised');
}
