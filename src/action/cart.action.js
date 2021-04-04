import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RELOAD_CART,
} from "../constant/cart.constant";
import { LOADING_START, LOADING_END } from "../constant/global.constant";
import { cartRef } from "../config/firebase";
import { v4 } from "uuid";
import { ShowAlert } from "../action/global.action";

export const fetchCart = (uid) => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  let userCartRef = cartRef.doc(uid);
  userCartRef
    .collection("cartProduct")
    .get()
    .then((docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push(doc.data());
      });
      dispatch({
        type: ADD_TO_CART,
        payload: arr,
      });
      dispatch({
        type: LOADING_END,
        payload: null,
      });
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

export const AddToCart = ({ uid, data }) => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  let id = v4();
  let userCartRef = cartRef.doc(uid);
  userCartRef
    .collection("cartProduct")
    .doc(id)
    .set({
      _id: id,
      ...data,
    })
    .then((data) => {
      dispatch({
        type: LOADING_END,
        payload: null,
      });
      dispatch(
        ShowAlert({
          type: "success",
          msg: "😄 Porduct added to cart.",
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

export const RemoveFromCart = ({ uid, pid }) => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  let userCartRef = cartRef.doc(uid);
  userCartRef
    .collection("cartProduct")
    .doc(pid)
    .delete()
    .then(() => {
      dispatch(
        ShowAlert({
          type: "success",
          msg: "😄 Porduct removed from cart.",
        })
      );
      dispatch({
        type: RELOAD_CART,
        payload: null,
      });
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
