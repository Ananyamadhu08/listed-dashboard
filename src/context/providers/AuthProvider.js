import { useContext, createContext, useReducer, useEffect } from 'react';
import { authReducer } from '../reducers/AuthReducer';
import { authActions } from '../constants/AuthConstants';

const AuthContext = createContext();

export const authInitState = {
  loading: false,
  error: null,
  user: {},
  loggedInUser: localStorage.getItem('listed-TOKEN')
    ? localStorage.getItem('listed-TOKEN')
    : null,
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitState);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('listed-TOKEN');

    if (loggedInUser) {
      authDispatch({
        type: authActions.LOGIN_SUCCESS,
        payload: { user: {}, loggedInUser },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
