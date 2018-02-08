import {LOAD_FORM} from '../constants/ActionTypes'
import questionnaireService from "../services/questionnaireService";


export function loadForm(_uri, _id, _version) {
  return {type: LOAD_FORM, payload: questionnaireService.getQuestionnaire(_uri, _id, _version)};
}
