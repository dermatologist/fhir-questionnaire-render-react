import {LOAD_FORM} from '../constants/ActionTypes'
import questionnaireService from "../services/questionnaireService";


export function loadForm(_base, _uri, _id, _version) {
  return {type: LOAD_FORM, payload: questionnaireService.getQuestionnaire(_base, _uri, _id, _version)};
}

export function loadFormFromUrl(_uri) {
  return {type: LOAD_FORM, payload: questionnaireService.getQuestionnaireFromUrl(_uri)};
}
