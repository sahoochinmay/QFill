import { ALERT_START, ALERT_END } from "../constant/global.constant";

const initialState = {
  flag: false,
  type: "",
  msg: ""
};

const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALERT_START:
      return { ...state, flag: true, type: payload.type, msg: payload.msg };
    case ALERT_END:
      return {
        ...state,
        flag: false,
        type: "",
        msg: "",
      };
    default:
      return state;
  }
};

export default globalReducer;
