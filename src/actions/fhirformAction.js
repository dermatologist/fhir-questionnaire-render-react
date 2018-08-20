import { Actions } from "@jsonforms/core";
import fhirformjs from "fhirformjs";
import { LOAD_FORM } from "../constants/ActionTypes";
import questionnaireService from "../services/questionnaireService";

export function loadForm(_base, _uri, _id, _version) {
	  return {type: LOAD_FORM, payload: questionnaireService.getQuestionnaire(_base, _uri, _id, _version)};
}

export function loadFormFromUrl(_uri) {
	return {type: LOAD_FORM, payload: questionnaireService.getQuestionnaireFromUrl(_uri)};
}

export function renderForm(_data, _schema, _ui = null) {
		return (dispatch) => {
			if(_ui === null || _ui === undefined)
				dispatch(Actions.init(_data, _schema));
			else
				dispatch(Actions.init(_data, _schema, _ui));
	}
}

export function handleSubmitAction(_questionnaireResponse, _url) {
  // https://github.com/redux-saga/redux-saga/issues/1002

  // const store = configureStore();
  // When state will be updated(in this case, when items will be fetched), this is how we can get updated state.
  // const items= store.getState().jsonforms.core.data;
  // console.log(_state);
  // const state = configureStore().getState();
  // const formData = state.jsonforms.core.data;
  // console.log(state.jsonforms.core);
  // Add form data to QuestionnaireResponse
  // const qr = fhirformjs.fhirformResp(_questionnaireResponse, formData);
  // return { type: SUBMIT_FORM, payload: questionnaireService.postQuestionnaireResponseToUrl(_url, qr) };
  // return { type: SUBMIT_FORM, payload: "" }

  return (dispatch, getState) => {
    const qr = fhirformjs.fhirformResp(_questionnaireResponse, getState().jsonforms.core.data);
    questionnaireService.postQuestionnaireResponseToUrl(_url, qr);
    console.log(getState().jsonforms.core.data);
  };

}
