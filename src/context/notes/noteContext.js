import {createContext} from "react";

//Here we are merely importing the context api from react and setting its value equal to noteContext
const noteContext = createContext(); //Context is going to hold states related to notes

export default  noteContext;