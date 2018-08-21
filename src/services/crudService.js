import { fhirServer } from "./crud";


// All functions return a promise

export default class crudService {


  static getResourceFromUrl(url) {
    return fhirServer.get(url);
  }

  static postResource(url, resource) {
    url = 'http://hapi.fhir.org/create'; // TODO: Change this URL
    const to_post = {};
    to_post.serverId = 'home';
    to_post.resource = 'QuestionnaireResponse';
    to_post['resource-create-id'] = '';
    to_post['resource-create-body'] = resource;
    return fhirServer.post(url, to_post);
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
