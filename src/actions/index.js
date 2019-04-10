import axios from 'axios'
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCH_SW_CHARACTERS = 'FETCH_SW_CHARACTERS';
export const FETCH_SW_SUCCESS = 'FETCH_SW_SUCCESS';
export const FETCH_SW_FAILURE = 'FETCH_SW_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getCharacters = () => {
    return dispatch => {
        // dispatch a 'start' action
        dispatch({ type: FETCH_SW_CHARACTERS })
        // Then, start the API call!
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                dispatch({
                    type: FETCH_SW_SUCCESS,
                    payload: response.data.results
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_SW_FAILURE,
                    payload: error
                })
            })
    }
}