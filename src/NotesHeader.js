import { useState } from "react";

function NotesHeader({onSave}) {
    const [notesTitle, setNoteTitle] = useState("");
    return (
        <form id="notepad_form" className="d-flex" onSubmit={(e) => {
            e.preventDefault();
            onSave(notesTitle)
        }}>
            <div className="form-col-9">
                <input maxLength="255" type="text" placeholder="My Notepad title..."
                 value={notesTitle} onChange={(e) => {setNoteTitle(e.target.value)}} required/>
            </div>
            <div className="form-col-3 flex-end">
                <button className="btn-white">View Stats</button>
                <button className="btn-blue txt-white" type="submit">Save</button>
                <button className="btn-red txt-white">Delete</button>
            </div>
        </form>
    )
}

export default NotesHeader;