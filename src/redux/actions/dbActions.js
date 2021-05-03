import { SET_DB_CITIES, SET_DB_POINTS } from 'redux/types';
import sendRequest from 'api';

const setCitiesAction = (cities) => ({ type: SET_DB_CITIES, payload: cities });
const setPointsAction = (points) => ({ type: SET_DB_POINTS, payload: points });

export const setDbCitiesAction = () => (dispatch) => {
  sendRequest('/db/city', 'GET').then((result) => {
    if (result) dispatch(setCitiesAction(result.data));
  });
};

export const setDbPointsAction = () => (dispatch) => {
  sendRequest('/db/point', 'GET').then((result) => {
    if (result) dispatch(setPointsAction(result.data));
  });
};
