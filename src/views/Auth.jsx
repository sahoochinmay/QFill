import React, { useState } from "react";
import {
  Container,
  Avatar,
  Typography,
  CssBaseline,
  Box,
  TextField,
  Button,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LockOutlined, LockOpen } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ShowAlert } from "../action/global.action";
import { SignIn, SignUp } from "../action/auth.action";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  route: {
    cursor: "pointer",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Auth = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { loading } = useSelector((state) => state.authReducer);
  console.log(loading);
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   if (isLoggedIn) {
  //     // history.push("/home");
  //     return <p>You are loggedin.</p>;
  //   }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      dispatch(
        ShowAlert({
          type: "error",
          msg: "Please fill out all the fields.",
        })
      );
      return;
    }
    {
      isSignIn
        ? dispatch(SignIn(email, password))
        : dispatch(SignUp(email, password));
    }
  };

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.paper}>
        <Avatar
          style={{ background: isSignIn ? "red" : "green" }}
          className={classes.avatar}
        >
          {isSignIn ? <LockOutlined /> : <LockOpen />}
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </Typography>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          <p
            className={classes.route}
            onClick={() => {
              setIsSignIn(!isSignIn);
              setEmail("");
              setPassword("");
            }}
          >
            {isSignIn
              ? "Don't have an account ? SIGNUP"
              : "Have an account ? SIGNIN"}
          </p>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

export default Auth;
