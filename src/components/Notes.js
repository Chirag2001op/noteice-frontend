import React, { useContext }  from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';

const Notes = () => {

    const context = useContext(noteContext);
    const {notes, setNotes} = context;

  return(
    <div className="container my-5">
        <h2>Your notes</h2>
        {notes.map((notes)=>{
          return <NoteItem notes = {notes}  />
        })}
      </div>
  ) ;
};

export default Notes;

