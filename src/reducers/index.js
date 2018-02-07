import {combineReducers} from 'redux'
import counter from './counter'
import fhirformReducer from './fhirformReducer'

const rootReducer = combineReducers({
  counter,
  fhirform: fhirformReducer,
});

export default rootReducer
