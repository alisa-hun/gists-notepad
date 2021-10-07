function Note({note}) {
    return (
        <div className="d-flex flex-column notes-cont">
            <div><input maxLength="255" type="text" value={note.title} placeholder="Enter note title..." required/></div>
            <div><textarea maxLength="1000" value={note.note} placeholder="Enter note..." required></textarea></div>
        </div>
    )
}

export default Note;