import {
  GET_LINKS,
  ADD_LINK,
  DELETE_LINK,
  LINKS_LOADING
} from '../actions/types';

const initialState = {
  links: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LINKS:
      return {
        ...state,
        links: action.payload,
        loading: false
      };
    case DELETE_LINK:
      return {
        ...state,
        links: state.links.filter(link => link._id !== action.payload)
      };
    case ADD_LINK:
      return {
        ...state,
        links: [action.payload, ...state.links]
      };
    case LINKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
