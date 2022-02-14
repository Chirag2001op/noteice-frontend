import React, {useState}  from "react";
import NoteContext from "./noteContext";


//Here we are only making a function in which we will put something under provider syntax 
const NoteState = (props) => {
  
const notesInitial = [
  {
    "_id": "61f9845a9c1gffg9b4d5e453casdfabf",
    "title": "Gaaliyaan",
    "description": "Teri maa di phuddi phen de lunn",
    "tag": "personal",
    "date": "2022-02-01T19:04:58.202Z",
    "__v": 0
  },
  {
    "_id": "61f9845a9c19bsweafd4d5e453cagf",
    "title": "Gaaliyaan",
    "description": "Teri maa di phuddi phen de lunn",
    "tag": "personal",
    "date": "2022-02-01T19:04:58.202Z",
    "__v": 0
  }
]
const [notes, setNotes] = useState(notesInitial);


//Add notes
const addNote = (title, description, tag)=>{

  // console.log("adding new note")
    const note = {
      "_id": "61f9845a9cwer19b4d5e453casdfabf",
      "title": title,
      "description":description,
      "tag": tag,
      "date": "2022-02-01T19:04:58.202Z",
      "__v": 0
    };
    // setNotes(notes.push(notes)); concat returns an array whereas push updates and array
    setNotes(notes.concat(note));
}

//Delete note
const deleteNote = (id)=>{
    console.log("Deleting the node" + id)
    const newNotes = notes.filter((notes)=>{return notes._id!==id})
    setNotes(newNotes)
}

//Edit note
 const editNote=()=>{

 }

  return (
    //This is going to provide all the state needed.
    //whatever you want to provide put that under the value and whenever you'll wrap anything in bw this context will get children
    <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}> 

        {props.children}

    </NoteContext.Provider>
  );

};

export default NoteState;
