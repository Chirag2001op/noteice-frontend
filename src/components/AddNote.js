import React, { useContext, useState } from "react";

import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const handleClick = (e) => {
      e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); //set the name of the form equal to its value for ex the input with name description will equal to its value
  };

  return (
    <>
      <h2>Create note</h2>
      <div className="mb-3 my-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Groceries"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          type="text"
          placeholder="Eggs, Hen, Milk"
          onChange={onChange}
        ></textarea>
        <div className="col-auto my-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
