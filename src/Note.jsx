import React from "react";


function Note(props) {

    function handleDelete() {
        props.onDelete(props.id)
    }
    return (
        <div className="note">
            <h1> {props.id + 1}. {props.heading}</h1>
            <p>{props.p}</p>
            <button onClick={handleDelete} >DELETE</button>
        </div>
    )
} 

export default Note;