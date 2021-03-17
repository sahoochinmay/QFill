import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Auth from "./views/Auth";
import Landing from "./views/Landing";
import { CloseAlert } from "./action/global.action";
import Home from './views/Home'

const App = () => {
  const dispatch = useDispatch();
  const { type, flag, msg } = useSelector((state) => state.globalReducer);
  const handleAlertClose = () => {
    dispatch(CloseAlert());
  };
  return (
    <Router>
      <Snackbar open={flag} autoHideDuration={5000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={type}>
          {msg}
        </Alert>
      </Snackbar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/home"  component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
