import axios from "axios";
import qs from 'qs';
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
    delete qResponse.id; // Delete any existing ID, will be aded by the server
    //
    // const toPost = {};
    // toPost.serverId = "home";
    // toPost.resource = "QuestionnaireResponse";
    // toPost["resource-create-id"] = "";
    // toPost["resource-create-body"] = qResponse;
    // return fhirServer.post(url, toPost);


    // https://github.com/axios/axios/issues/362
    let toReturn = null;
    const requestBody = {
      serverId: "home",
      resource: "QuestionnaireResponse",
      'resource-create-id': "",
      'resource-create-body': encodeURIComponent(JSON.stringify(qResponse))
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      params: requestBody
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
