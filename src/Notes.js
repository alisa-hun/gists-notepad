import Note from "./Note";

function Notes({notes}) {
    if (!notes)
        return <div></div>

    return notes.map((note) => { return <Note key={note.id} note={note}/> })
}

export default Notes;