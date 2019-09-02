import { GET_LINKS, ADD_LINK, DELETE_LINK, LINKS_LOADING } from './types';

export const getLinks = () => {
  return {
    // Type = action
    type: GET_LINKS
  };
};

export const deleteLink = id => {
  return {
    type: DELETE_LINK,
    // Because item reducer needs to know the id of link to delete, payload is needed
    payload: id
  };
};

export const addLink = link => {
  return {
    type: ADD_LINK,
    payload: link
  };
};

export const setLinksLoading = () => {
  return {
    type: LINKS_LOADING
  };
};
