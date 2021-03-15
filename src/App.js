import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./views/Auth";
import Landing from "./views/Landing";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
};

export default App;
