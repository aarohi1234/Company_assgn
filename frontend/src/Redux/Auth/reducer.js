import * as types from "./actionTypes";

const initial = {
  loginUser: [],
  currentUser: {},
  isError: false,
  isLoading: false,
  isAuth: false,
};

export const reducer = (state = initial, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        loginUser: payload,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        loginUser: [],
      };

    case types.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
