import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNote => {
            return [...prevNote, note];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== id;

            });
        });
    }
    return (
        <>
            <Header/>   
            <CreateArea   onAdd = {addNote} />

            {notes.map((note, index ) => {
                return <Note 
                    id = {index}
                    heading = {note.title}
                    p = {note.content}
                    onDelete = {deleteNote}
                />
            })}
            <Footer/>
        </>
    )
}

export default App;

