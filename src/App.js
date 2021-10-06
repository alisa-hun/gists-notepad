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
        const files = notes.map((note) => {return `{"${note.title}": {"content":"${note.note}"}`});
        const requestOpts = {
          method: 'POST',
          cache: 'no-cache',
          referrerPolicy: 'no-referrer',
          headers: {
              'Accept': 'application/vnd.github.v3+json',
              'Authorization': 'token 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',
              'Content-Type': 'application/json'
          },
          body:`{"description":"${notesTitle}","public":true,"files":${JSON.stringify(files)}}`
          
        };

        fetch("https://api.github.com/gists", requestOpts)
        .then((response) => {
          return response.json()
        })
        .then((response) => {})

         console.log("Save or not, that's a question!")
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