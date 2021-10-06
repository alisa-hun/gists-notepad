import { useState } from "react";

function NoteForm({onAdd}) {
    const [title, setTitle] = useState("Untitled");
    const [note, SetNote] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(title, note);
            setTitle("");
            SetNote("")
        }}>
            <input type="text" value={title} onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <textarea value={note} onChange={(e) => {
                SetNote(e.target.value);
            }}>{note}</textarea>
            <button>Add</button>
        </form>
    )
}

export default NoteForm;