import { FETCH_ORDER, PLACE_ORDER } from "../constant/order.constant";
import { LOADING_START, LOADING_END } from "../constant/global.constant";
import { v4 } from "uuid";
import { ShowAlert } from "../action/global.action";
import { orderRef } from "../config/firebase";

export const fetchOrders = (uid) => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  let userOrderRef = orderRef.doc(uid);
  userOrderRef
    .collection("orderList")
    .get()
    .then((docs) => {
      let arr = [];
      docs.forEach((doc) => {
        arr.push(doc.data());
      });
      dispatch({
        type: FETCH_ORDER,
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

export const placeOrder = ({uid, data}) => (dispatch) => {
  dispatch({
    type: LOADING_START,
    payload: null,
  });
  let id = v4();
  let userOrderRef = orderRef.doc(uid);
  userOrderRef
    .collection("orderList")
    .doc(id)
    .set({
      _id: id,
      ...data,
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: LOADING_END,
        payload: null,
      });
      dispatch(
        ShowAlert({
          type: "success",
          msg: "😄 Order Placed.",
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
