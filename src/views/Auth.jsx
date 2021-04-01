import React, { useState } from "react";
import { CircularProgress, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Person,
  Lock,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
} from "@material-ui/icons";
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

const Auth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  console.log(isLoggedIn);
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
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
    if (!isSignIn && userName === "") {
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
        : dispatch(SignUp(email, password, userName));
    }
  };

  return (
    <section id="authContainer">
      <div className={`container ${isSignIn ? null : "sign-up-mode"}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="#"
              className="sign-in-form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <Email className="icon" />
                <input
                  type="text"
                  placeholder="E-mail"
                  autoComplete
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <Lock className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  autoComplete
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn solid">
                Sign In
              </button>
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "1.3rem",
                }}
              >
                Or Sign in with social platforms
              </p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <Facebook
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
                <a href="#" className="social-icon">
                  <Twitter
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
                <a href="#" className="social-icon">
                  <Instagram
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
                <a href="#" className="social-icon">
                  <LinkedIn
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
              </div>
            </form>
            <form
              action="#"
              className="sign-up-form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <Person className="icon" />
                <input
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <Email className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <Lock className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn solid">
                Sign Up
              </button>
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <Facebook
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
                <a href="#" className="social-icon">
                  <Twitter
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
                <a href="#" className="social-icon">
                  <Instagram
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
                <a href="#" className="social-icon">
                  <LinkedIn
                    style={{
                      fontSize: "2rem",
                    }}
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Hello, Friend</h3>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => setIsSignIn(false)}
                className="btn transparent"
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Welcome Back!</h3>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsSignIn(true)}
                className="btn transparent"
                id="sign-in-btn"
              >
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
