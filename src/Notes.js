import Note from "./Note";

function Notes({notes}) {
    console.log(notes)
    if (!notes)
        return <div></div>

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