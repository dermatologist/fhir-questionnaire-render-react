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

  return (dispatch, getState) => {
	const qr = fhirformjs.fhirformResp(_questionnaireResponse, getState().jsonforms.core.data);
	_url.replace("Questionnaire", "QuestionnaireResponse");
    questionnaireService.postQuestionnaireResponseToUrl(_url, qr);
    console.log(getState().jsonforms.core.data); // TODO: To remove
  };

}
