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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Auth = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { loading, isLoggedIn } = useSelector((state) => state.authReducer);
  console.log(isLoggedIn);
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (isLoggedIn) {
    history.push("/home");
    return <p>You are loggedin.</p>;
  }
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
    <section id="authContainer">
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* <div className={classes.paper}>
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
      </div> */}
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form
              action="#"
              class="sign-in-form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" class="btn solid">Login</button>
              <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" class="btn" value="Sign up" />
              <p class="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Hello, Friend</h3>
              <p>Enter your personal details and start journey with us</p>
              <button class="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>Welcome Back!</h3>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
