import { combineReducers } from "redux";
import { jsonformsReducer } from "@jsonforms/core";
import counter from "./counter";
import fhirformReducer from "./fhirformReducer";

const rootReducer = combineReducers({
  counter,
  fhirform: fhirformReducer,
  jsonforms: jsonformsReducer()
});

export default rootReducer
