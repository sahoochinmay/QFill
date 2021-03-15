import { ALERT_START, ALERT_END } from "../constant/global.constant";


export const ShowAlert = ({ type, msg }) => (dispatch) => {
    dispatch({
      type: ALERT_START,
      payload: {
        type: type,
        msg: msg,
      },
    });
  };
  
  export const CloseAlert = () => (dispatch) => {
    dispatch({
      type: ALERT_END,
      payload: null,
    });
  };