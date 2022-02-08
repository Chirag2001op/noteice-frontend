import React, { useContext }  from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';

const Notes = () => {

    const context = useContext(noteContext);
    const {notes, setNotes} = context;

  return(
    <div className="container row my-5">
        <h2>Your notes</h2>
        {notes.map((notes)=>{
          return <NoteItem key={notes._id} notes = {notes}  />
        })}
      </div>
  ) ;
};

export default Notes;

