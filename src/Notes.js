import Note from "./Note";

function Notes({notes}) {
    return (
        <div>
            {
                notes.map((note) => {
                    return (
                        <Note key={note.id} note={note}/>
                    )
                })
            }
        </div>
    )

}

export default Notes;