import { authActions } from '../constants/AuthConstants';

export const authReducer = (state, action) => {
  switch (action.type) {
    case authActions.LOADING:
      return { ...state, loading: true };

    case authActions.ERROR:
      return { ...state, error: action.payload, loading: false };

    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loggedInUser: action.payload.loggedInUser,
      };

    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loggedInUser: action.payload.loggedInUser,
      };

    case authActions.LOGOUT_SUCCESS:
      window.localStorage.removeItem('listed-TOKEN');

      return {
        ...state,
        user: {},
        loading: false,
        encodedToken: null,
      };

    default:
      return state;
  }
};
