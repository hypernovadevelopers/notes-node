/*
var obj = {
    name: "Santiago"
};

var stringObj = JSON.stringify(obj);


var personString = '{"name": "Santiago", "age" : 25}';
var person = JSON.parse(personString);

console.log(person);*/

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('./notes.json');

let note = JSON.parse(noteString);

// Note
console.log(typeof note);
console.log(note);
