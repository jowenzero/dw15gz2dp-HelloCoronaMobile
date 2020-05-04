import { GET_CONSULTATIONS, GET_CONSULTATION } from "../constants/action-types";

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CONSULTATIONS}_PENDING`:
    case `${GET_CONSULTATION}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_CONSULTATIONS}_FULFILLED`:
    case `${GET_CONSULTATION}_FULFILLED`:
      if (action.payload) {
        return {
          ...state,
          data: action.payload.data,
          loading: false,
        };
      }
      else {
        return {
          ...state,
          loading: false,
        };
      }
    case `${GET_CONSULTATIONS}_REJECTED`:
    case `${GET_CONSULTATION}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;