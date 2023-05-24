import { appActions } from '../constants/AppDataConstants';

export const appDataReducer = (state, action) => {
  switch (action.type) {
    case appActions.LOADING:
      return { ...state, loading: true };

    case appActions.ERROR:
      return { ...state, error: action.payload, loading: false };

    case appActions.GET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};
