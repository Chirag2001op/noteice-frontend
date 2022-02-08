import React from "react";

const NoteItem = (props) => {
  const { notes } = props;

  return (
    <div className = "col-md-3">
      <div className="card my-3" >
        <div className="card-body">
          <h5 className="card-title">{notes.title} </h5>
          <p className="card-text">{notes.description}</p>
        </div>
        <div className="container col d-flex align-items-center">
        <i className="far fa-trash-alt mx-2 my-2"></i>
        <i className="far fa-edit mx-2 my-2"></i>
        </div>
        
      </div>
    </div>
  );
};

export default NoteItem;
