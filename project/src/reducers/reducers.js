import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAIL,
  POST_DATA,
  POST_SUCCESS,
  POST_FAIL,
} from "../actions/actions";

const initialState = {
  players: [],
  isFetching: false,
  isPosting: false,
  error: "",
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
        player: [],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        players: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_DATA:
      return {
        ...state,
        isPosting: true,
        players: [...state.players],
      };
    case POST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        players: action.payload,
      };
    case POST_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
