import {LOAD_FORM} from '../constants/ActionTypes'
import {initialState} from "../constants/initialState";

export default function fhirformReducer(state = initialState, action) {
  switch (action.type) {
    case `${LOAD_FORM}_PENDING`:
      return {...state, fetching: true};
    case `${LOAD_FORM}_FULFILLED`:
      return {
        ...state,
        fetching: false,
        fetched: true,
        singleResource: action.payload.data,
      };
    case `${LOAD_FORM}_REJECTED`:
      return {...state, fetching: false, error: action.payload};
    default:
      return state;
  }
}
