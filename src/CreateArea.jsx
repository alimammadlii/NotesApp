import React, {useState} from "react";
import Note from "./Note";


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "", 
        content: ""
    });

    function handleChange(e) {
        const {name, value} = e.target; 
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value 

            } 
        })
    }

    function handleClick(e) {
        props.onAdd(note);
        e.preventDefault(); 
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
                <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}


export default CreateArea;
