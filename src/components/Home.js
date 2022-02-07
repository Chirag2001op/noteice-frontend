import React from "react";
import Notes from "./Notes";


const Home = () => {
 

  return (
    <div className="container my-3">
      <h2>Create note</h2>
      <div class="mb-3 my-3">
        <label for="exampleFormControlInput1" class="form-label">
          Topic
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Groceries"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Eggs, Hen, Milk"
        ></textarea>
        <div class="col-auto my-3">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
      </div>

      <Notes/>

    </div>
  );
};

export default Home;
