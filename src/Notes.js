import Note from "./Note";

function Notes({notes, onDelete}) {
    if (!notes)
        return <div></div>

    return notes.map((note) => { return <Note key={note.id} note={note} onDelete={onDelete}/> })
}

export default Notes;