import crudService from "./crudService";

export default class questionnaireService {


  static getQuestionnaire(_url, _id, _version) {
    return crudService.getResource(_url, _id, _version);
  }

}
