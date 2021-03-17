import {
  AUTH_SIGNIN,
  AUTH_END,
  AUTH_START,
  AUTH_SIGNOUT,
  AUTH_SIGNUP,
} from "../constant/auth.constant";
import { auth } from "../config/firebase";
import { ShowAlert } from './global.action'

export const SignIn = (email, password) => (dispatch) => {
  dispatch({
    type: AUTH_START,
    payload: null,
  });
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({
        type: AUTH_SIGNIN,
        payload: res.user,
      });
      dispatch(
        ShowAlert({
          type: "success",
          msg: "😄 Logged in Successfull.",
        })
      );
    })
    .catch((err) => {
      dispatch(
        ShowAlert({
          type: "error",
          msg: err.message,
        })
      );
      dispatch({
        type: AUTH_END,
        payload: null,
      });
    });
};

export const SignUp = (email,password) => dispatch => {
  console.log("signup start");
  dispatch({
    type: AUTH_START,
    payload: null,
  });
  auth.createUserWithEmailAndPassword(email,password)
    .then((res) => {
      dispatch({
        type: AUTH_SIGNUP,
        payload: res.user,
      });
      dispatch(
        ShowAlert({
          type: "success",
          msg: "😄 Account created Successfull.",
        })
      );
    })
    .catch(err => {
      dispatch({
        type: AUTH_END,
        payload: null,
      });
      dispatch(
        ShowAlert({
          type: "error",
          msg: err.message,
        })
      );
    })
}

export const SignOut = () => (dispatch) => {
  dispatch({
    type: AUTH_START,
    payload: null,
  });
  auth
    .signOut()
    .then(() => {
      dispatch({
        type: AUTH_SIGNOUT,
        payload: null,
      });
      dispatch(
        ShowAlert({
          type: "success",
          msg: "😄 Logged out successfull.",
        })
      );
    })
    .catch((err) => {
      dispatch(
        ShowAlert({
          type: "error",
          msg: err.message,
        })
      );
      dispatch({
        type: AUTH_END,
        payload: null,
      });
    });
};
