import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <Alert message = "This is a sexy application"/>
          <Switch>
          <React.Fragment>
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/About">
                <About />
              </Route>
            </div>
          </React.Fragment>
          </Switch>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
