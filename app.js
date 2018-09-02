// const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');


/*fs.appendFile('greetings.txt',`Hello ${user.username}. You are ${notes.age}.`, (err) => {
    if(err) throw err;
    console.log('Great! It was set.');
});*/

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

const argv = yargs.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Reads a note', {
        title: titleOptions
    })
    .command('remove', 'Removes a note', {
        title: titleOptions,
    })
    .help()
    .argv;

let command = argv._[0]; // Command line arguments to pass data in to app.

// console.log('Process: ', process.argv); // Get all commands

// Commands we are allowing
if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note added successfully');
        notes.logNote(note);
    } else {
        console.log('Title is already in use. Please try a different one.');
    }

} else if(command === 'list') {
    let fetchedNotes = notes.getAll();

    if(fetchedNotes.length > 0) {
        console.log(`Printing ${fetchedNotes.length} note(s)`);
        fetchedNotes.forEach((note) => notes.logNote(note));
    } else {
        console.log('No notes were read');
    }

} else if(command === 'read') {
    let note = notes.getNote(argv.title);
    if(note) {
        console.log('Note read successfully');
        notes.logNote(note);
    } else {
        console.log('Note does not exist.');
    }
} else if(command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}

