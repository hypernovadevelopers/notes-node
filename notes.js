const fs = require('fs');

/**
 * Fetch Notes is going to try to read a file and return an Array of Notes.
 * If it cannot return any notes at all, it will instead give out an empty array.
 * @return  [];
 */
let fetchNotes = () => {
    // Read current file and add it to array.
    try {
        let notesString = fs.readFileSync('notes.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

/**
 * Save Notes writes the note to the json file using the parameter that gets sent in.
 * @param notes
 * @return void
 */
let saveNotes = (notes) => {
    // Write Note to notes.json
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

/**
 * Add Notes takes an array of notes, checks if there are duplicate titles and if there is, we do nothing.
 * If not, we push the note to the array and then write the note to notes.json.
 * @param title
 * @param body
 */
let addNote = (title, body) => {
    // Empty Array.
   let notes = fetchNotes();
   // Note object
    let note = {title, body};

    // Check if title exists?
    let duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
};

let getNote = (title) => {
    let notes = fetchNotes();
    return notes.filter((note) => note.title === title);
};

let removeNote = (title) => {
    // Fetch Notes
    let notes = fetchNotes();
    // Filter Notes, removing the one with the title of the argument.
    let filteredNotes = notes.filter((note) => note.title !== title);
    // Save New Notes Array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    console.log('--- Note ---');
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

