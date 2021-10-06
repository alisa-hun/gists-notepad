import { useState } from "react";

function NotesHeader({onSave}) {
    const [notesTitle, setNoteTitle] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSave(notesTitle)
        }}>
            <input type="text" value={notesTitle} onChange={(e) => {
                setNoteTitle(e.target.value)
            }}/>

            <button>View Stats</button>
            <button type="submit">Save</button>
            <button>Delete</button>
        </form>
    )
}

export default NotesHeader;