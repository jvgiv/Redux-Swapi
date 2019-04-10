import { 
  FETCH_SW_CHARACTERS,
  FETCH_SW_SUCCESS,
  FETCH_SW_FAILURE
   } from "../actions";
   
const initialState = {
  characters: [],
  error: null,
  fetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SW_CHARACTERS:
      return {
        ...state,
        error: null,
        fetching: true
      };
    case FETCH_SW_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        characters: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
