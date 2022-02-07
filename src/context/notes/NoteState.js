import React, {useState}  from "react";
import NoteContext from "./noteContext";


//Here we are only making a function in which we will put something under provider syntax 
const NoteState = (props) => {
  

  return (
    //This is going to provide all the state needed.
    //whatever you want to provide put that under the value and whenever you'll wrap anything in bw this context will get children
    <NoteContext.Provider value={{}}> 

        {props.children}

    </NoteContext.Provider>
  );

};

export default NoteState;
