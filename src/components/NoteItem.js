import React from "react";

const NoteItem = (props) => {
  const { notes } = props;

  return (
    <div className = "col-md-3">
      <div class="card my-3" >
        <div class="card-body">
          <h5 class="card-title">{notes.title} </h5>
          <p class="card-text">{notes.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla alias corrupti fuga perferendis, sapiente quisquam nam beatae, laudantium corporis saepe ratione quam quibusdam et iure ad totam delectus nesciunt iusto eveniet iste provident rem animi.</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
