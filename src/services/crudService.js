import axios from "axios";
import qs from "qs";
import { fhirServer } from "./crud";


// All functions return a promise

export default class crudService {


  static getResourceFromUrl(url) {
    return fhirServer.get(url);
  }

  static postResource(url, qResponse) {
    // // url = 'http://hapi.fhir.org/create'; // TODO: Change this URL
    url = "create"; // TODO: Change this URL
    //
    // // url = 'http://localhost:3000/';
    qResponse.status = "completed";
    if(qResponse.id !== undefined){
      const originalId = qResponse.id; // Save the original QuestionnaireId as the questionnaire.reference in the response
      qResponse.questionnare = {};
      qResponse.questionnare.reference = originalId;
      delete qResponse.id; // Delete any existing ID, New Id will be added by the server.
    }
      
    // https://github.com/axios/axios/issues/362
    let toReturn = null;
    const requestBody = {
      serverId: "home",
      pretty: true,
      resource: "QuestionnaireResponse",
      'resource-create-id': "",
      "resource-create-body": JSON.stringify(qResponse)
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    };

    axios.post(url, qs.stringify(requestBody), config)
      .then((result) => {
        // Do somthing
        toReturn = result;
      })
      .catch((err) => {
        // Do somthing
        toReturn = err;
      });
    return toReturn;
  }

  static getResource(baseUrl, uri, _id, _version) {
    return fhirServer.get(`${baseUrl}${uri}/${_id}/_history/${_version}?_format=json`);
  }

  // updateResource(url, resource) {
  //   return fhirServer.put(`${url}/${resource._id}`, resource);
  // }
  //
  // deleteResource(url, _id) {
  //   return fhirServer.delete(`${url}/${_id}`);
  //
  // }
}
