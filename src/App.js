import './App.css';
import Notes from './Notes';
import NotesHeader from "./NotesHeader";
import NoteForm from "./NoteForm";
import {useState, useEffect} from "react";

function App() {
  const [notesTitle, setNotesTitle] = useState("");

  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <NotesHeader onSave={(notesTitle) => {
        if (!notes.length) {
          return console.log(Error("At least one note should be added"))
        }

        let notes_filtered = notes.map((note) => ({"filename": note.title, "content": note.note}));

        let files = {};
        notes_filtered.forEach(function(note, index) {
            let key = new Date().getTime() + (Math.floor(Math.random() * 100));
            files[key + ''] = note;
        })

        const requestOpts = {
          method: 'POST',
          cache: 'no-cache', 
          credentials: 'same-origin',
          referrerPolicy: 'no-referrer',
          headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Authorization': 'token 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',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({"description": notesTitle, "public": true, "files": files})
        };

        fetch("https://api.github.com/gists", requestOpts)
        .then((response) => {
          return response.json()
        })
        .then((response) => {})
      }}/>
      <NoteForm onAdd={(title, note) => {
          setNotes([
            ...notes,
            {
              id: Math.random(),
              title: title,
              note: note
            }
          ])
      }}/>
      <Notes notes={notes} onSave={() => {
         console.log("Save or not, that's a question!")
      }}/>
    </div>
  );
}

export default App;