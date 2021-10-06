import './App.css';
import Notes from './Notes';
import NotesHeader from "./NotesHeader";
import NoteForm from "./NoteForm";
import {useState} from "react";

function App() {
  const [notesTitle, setNotesTitle] = useState("")
  const [notes, setNotes] = useState([
    {
      id: Math.random(),
      title: "First Note Title",
      note: "My first note",
    },
    {
      id: Math.random(),
      title: "The other note's title",
      note: "My note",
    },
    {
      id: Math.random(),
      title: "One more Title",
      note: "And one more note",
    }
  ]);
  
  return (
    <div className="App">
      <NotesHeader onSave={(notesTitle) => {
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