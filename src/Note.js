function Note({note}) {
    return (
        <div>
            <input type="text" value={note.title}/>
            <textarea value={note.note}></textarea>
        </div>
    )
}

export default Note;