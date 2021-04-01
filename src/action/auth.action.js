import {
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
  AUTH_SIGNUP,
} from "../constant/auth.constant";
import { auth,userRef} from "../config/firebase";
import { ShowAlert } from "./global.action";
import { LOADING_END, LOADING_START } from "../constant/global.constant";

export const SignIn = (email, password) => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      let id = res?.user?.uid;
      userRef
        .doc(id)
        .get()
        .then((data) => {
          dispatch({
            type: AUTH_SIGNIN,
            payload: data?.data(),
          });
        });
    })
    .then((res) => {
      dispatch({
        type: LOADING_END,
        payload: null,
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
        type: LOADING_END,
        payload: null,
      });
    });
};

export const SignUp = (email, password, userName) => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      let id = res?.user?.uid;
      let user = {
        _id: id,
        email: res?.user?.email,
        userName: userName,
      };
      userRef
        .doc(id)
        .set({
          ...user,
        })
        .then(() => {
          dispatch({
            type: AUTH_SIGNUP,
            payload: user,
          });
        });
    })
    .then(() => {
      dispatch({
        type: LOADING_END,
        payload: null,
      });
      dispatch(
        ShowAlert({
          type: "success",
          msg: "😄 Account created Successfull.",
        })
      );
    })
    .catch((err) => {
      dispatch({
        type: LOADING_END,
        payload: null,
      });
      dispatch(
        ShowAlert({
          type: "error",
          msg: err.message,
        })
      );
    });
};

export const SignOut = () => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  auth
    .signOut()
    .then(() => {
      dispatch({
        type: AUTH_SIGNOUT,
        payload: null,
      });
      dispatch({
        type: LOADING_END,
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
        type: LOADING_END,
        payload: null,
      });
    });
};
