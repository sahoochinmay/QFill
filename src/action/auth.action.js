import {
  AUTH_SIGNIN,
  AUTH_END,
  AUTH_START,
  AUTH_SIGNOUT,
  AUTH_SIGNUP,
} from "../constant/auth.constant";
import { auth } from "../config/firebase";

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
      // dispatch(
      //   showAlert({
      //     type: "success",
      //     msg: "😄 Logged in Successfull.",
      //   })
      // );
    })
    .catch((err) => {
      // dispatch(
      //   showAlert({
      //     type: "error",
      //     msg: err.message,
      //   })
      // );
      dispatch({
        type: AUTH_END,
        payload: null,
      });
    });
};

export const SignUp = (data) => dispatch =>{
  dispatch({
    type: AUTH_START,
    payload: null,
  });
 auth.createUserWithEmailAndPassword(data?.email, data?.password)
 .then((res) =>{
  dispatch({
    type: AUTH_SIGNUP,
    payload: res.user,
  });
 })
 .catch(err =>{
  dispatch({
    type: AUTH_END,
    payload: null,
  });
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
      // dispatch(
      //   showAlert({
      //     type: "success",
      //     msg: "😄 Logged out successfull.",
      //   })
      // );
    })
    .catch((err) => {
      // dispatch(
      //   showAlert({
      //     type: "error",
      //     msg: err.message,
      //   })
      // );
      dispatch({
        type: AUTH_END,
        payload: null,
      });
    });
};
