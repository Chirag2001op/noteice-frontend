import React, {useState}  from "react";
import NoteContext from "./noteContext";


//Here we are only making a function in which we will put something under provider syntax 
const NoteState = (props) => {
  
const notesInitial = [
  {
    "_id": "61f9845a9c19b4d5e453cabf",
    "title": "Gaaliyaan",
    "description": "Teri maa di phuddi phen de lunn",
    "tag": "personal",
    "date": "2022-02-01T19:04:58.202Z",
    "__v": 0
  },
  {
    "_id": "61f98c039c19b4d5e453cac1",
    "title": "Gaaliyaan",
    "description": "Teri maa di phuddi phen de lunn",
    "tag": "personal",
    "date": "2022-02-01T19:37:39.859Z",
    "__v": 0
  }
]
const [notes, setNotes] = useState(notesInitial);

  return (
    //This is going to provide all the state needed.
    //whatever you want to provide put that under the value and whenever you'll wrap anything in bw this context will get children
    <NoteContext.Provider value={{notes, setNotes}}> 

        {props.children}

    </NoteContext.Provider>
  );

};

export default NoteState;
