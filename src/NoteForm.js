import { useState } from "react";

function NoteForm({onAdd}) {
    const [title, setTitle] = useState("");
    const [note, SetNote] = useState("");
    return (
        <form id="notes_form" className="d-flex flex-column" onSubmit={(e) => {
            e.preventDefault();
            onAdd(title, note);
            setTitle("");
            SetNote("");
        }}>
            <h2>My notes</h2>
            <input placeholder="Enter note title..." required type="text" value={title} onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <textarea placeholder="Enter note..." required value={note} onChange={(e) => {
                SetNote(e.target.value);
            }}>{note}</textarea>
            <button className="btn-green txt-white">Add</button>
        </form>
    )
}

export default NoteForm;