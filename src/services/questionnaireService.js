import crudService from "./crudService";

export default class questionnaireService {


  static getQuestionnaire(_base, _url, _id, _version) {
    return crudService.getResource(_base, _url, _id, _version);
  }

  static getQuestionnaireFromUrl(_url) {
    return crudService.getResourceFromUrl(_url);
  }

}
