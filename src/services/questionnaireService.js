
import crudService from "./crudService";

export default class questionnaireService {


  static getQuestionnaire(_url ='Questionnaire', _id = 'sickKids', _version = 3) {
    return crudService.getResource(_url, _id, _version);
  }

}
