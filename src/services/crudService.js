import axios from "axios";
import { fhirServer } from "./crud";


// All functions return a promise

export default class crudService {


  static getResourceFromUrl(url) {
    return fhirServer.get(url);
  }

  static postResource(url, qResponse) {
    // // url = 'http://hapi.fhir.org/create'; // TODO: Change this URL
    // url = "create"; // TODO: Change this URL
    //
    // // url = 'http://localhost:3000/';
    qResponse.status = "completed";
    delete qResponse.id; // Delete any existing ID, will be aded by the server
    //
    // const toPost = {};
    // toPost.serverId = "home";
    // toPost.resource = "QuestionnaireResponse";
    // toPost["resource-create-id"] = "";
    // toPost["resource-create-body"] = qResponse;
    // return fhirServer.post(url, toPost);

    let toReturn = null;
    const bodyFormData = new FormData();
    bodyFormData.set('serverId', 'home');
    bodyFormData.set('resource', 'QuestionnaireResponse');
    bodyFormData.set('resource-create-id', '');
    bodyFormData.set('resource-create-body', qResponse);

    axios({
      method: 'post',
      url: 'create',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
      .then(response => {
        // handle success
        console.log(response);
        toReturn = response;
      })
      .catch(response => {
        // handle error
        console.log(response);
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
