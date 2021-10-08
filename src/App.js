import './App.css';
import Notes from './Notes';
import NotesHeader from "./NotesHeader";
import NoteForm from "./NoteForm";
import {useState, useEffect} from "react";
import "./GistsFilesStat";
import "./GistsStat";

function App() {
  const [notesTitle, setNotesTitle] = useState("");

  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  var key = new Date().getTime() + (Math.floor(Math.random() * 100));
  
  return (
    <div className="App">
      <NotesHeader 
        onSave={(notesTitle) => {
          if (!notes.length) {
            return console.log(Error("At least one note should be added"))
          }

          let notes_filtered = notes.map((note) => ({"filename": note.title, "content": note.note}));

          let files = {};
          notes_filtered.forEach(function(note, index) {
              files[key + ''] = note;
          });

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
            .then((response) => {debugger;})
        }}
        viewStats={() => {
        //  getGists();
        //  getGistsFiles();
        }}
        />
      <NoteForm onAdd={(title, note) => {
          setNotes([
            ...notes,
            {
              id: key,
              title: title,
              note: note
            }
          ])
      }}/>
      <Notes notes={notes} 
        onDelete={(note) => {setNotes(notes.filter((el) => el.id != note.id))}}/>
    </div>
  );
}

export default App;