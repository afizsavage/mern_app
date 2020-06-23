import React from "react";
import { Route } from "react-router-dom";
import "./stylesheets/tailwind.generated.css";
import "./stylesheets/mern.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App flex justify-center">
      <div className="w-full flex justify-center">
        <div className="flex justify-center">
          <Navbar />
          <Route path="/" component={Landing} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
