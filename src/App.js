import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar , Backdrop , CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Auth from "./views/Auth";
import Landing from "./views/Landing";
import { CloseAlert } from "./action/global.action";
import Home from './views/Home'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const { type, flag, msg , loading } = useSelector((state) => state.globalReducer);
  const handleAlertClose = () => {
    dispatch(CloseAlert());
  };
  return (
    <Router>
      {/* alert */}
      <Snackbar open={flag} autoHideDuration={5000} onClose={handleAlertClose}>
        <Alert style={{
          fontSize: '1.3rem'
        }} onClose={handleAlertClose} severity={type} >
          {msg}
        </Alert>
      </Snackbar>
      {/* loading */}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth" component={Auth} />
        <Route  path="/home"  component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
