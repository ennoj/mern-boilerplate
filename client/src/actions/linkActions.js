import axios from 'axios';
import { GET_LINKS, ADD_LINK, DELETE_LINK, LINKS_LOADING } from './types';

// Type = action
// Thunk is needed with dispatch
export const getLinks = () => dispatch => {
  dispatch(setLinksLoading());
  axios.get('/api/links').then(res =>
    dispatch({
      type: GET_LINKS,
      payload: res.data
    })
  );
};

export const addLink = link => dispatch => {
  axios.post('/api/links', link).then(res =>
    dispatch({
      type: ADD_LINK,
      payload: res.data
    })
  );
};

export const deleteLink = id => dispatch => {
  axios.delete(`/api/links/${id}`).then(res =>
    dispatch({
      type: DELETE_LINK,
      payload: id
    })
  );
};

export const setLinksLoading = () => {
  return {
    type: LINKS_LOADING
  };
};
