import { Actions } from "@jsonforms/core";
import { LOAD_FORM } from "../constants/ActionTypes";
import questionnaireService from "../services/questionnaireService";
import configureStore from "../store/index"

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

    export function handleSubmitAction(_questionnaireResponse) {
        let state = configureStore.getState();
        let core_data = state.jsonforms.core;
	  	return true;
	}
