import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { materialFields, materialRenderers } from "@jsonforms/material-renderers";
import rootReducer from "../reducers";

const middlewares = [ReduxThunk, promiseMiddleware()];
const enhancer = [applyMiddleware(...middlewares)];

export default function configureStore(initialState = {
  jsonforms: {
    renderers: materialRenderers,
    fields: materialFields
  }
}) {
  return createStore(rootReducer, initialState, ...enhancer)
}
