import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <Switch>
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/About">
                <About />
              </Route>
            </div>
          </Switch>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
