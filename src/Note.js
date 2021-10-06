function Note({note}) {
    return (
        <div>
            <input minlength="4" maxlength="255" type="text" value={note.title} required/>
            <textarea minlength="4" maxlength="1000" value={note.note} required></textarea>
        </div>
    )
}

export default Note;