import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Members from "./pages/Members";
import Dungeoncrush from "./pages/Dungeoncrush";





function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/dungeoncrush" component={Dungeoncrush} />
      </div>
    </Router>
  );
}

export default App;
