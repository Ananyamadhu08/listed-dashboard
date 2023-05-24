import { useContext, createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { appActions } from '../constants/AppDataConstants';
import { appDataReducer } from '../reducers/AppDataReducer';

const AppDataContext = createContext();

export const appDataInitState = {
  loading: false,
  error: null,
  data: {},
};

export const AppDataProvider = ({ children }) => {
  const [appDataState, appDataDispatch] = useReducer(
    appDataReducer,
    appDataInitState
  );

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://listedn-backend.onrender.com/data'
      );

      appDataDispatch({
        type: appActions.GET_DATA,
        payload: { data: response.data },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppDataContext.Provider value={{ appDataState, appDataDispatch }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
