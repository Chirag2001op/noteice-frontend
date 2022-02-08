import React from "react";
import Notes from "./Notes";


const Home = () => {
 

  return (
    <div className="container my-3">
      <h2>Create note</h2>
      <div className="mb-3 my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Topic
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Groceries"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Eggs, Hen, Milk"
        ></textarea>
        <div className="col-auto my-3">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
      </div>

      <Notes/>

    </div>
  );
};

export default Home;
