import axios from "axios";

// To set OpenMRS baseURL from manifest.webapp
export const fhirServer = axios.create({
  baseURL: "http://hapi.fhir.org/baseDstu3/",
  // credentials: 'same-origin',
  headers: {
    "Content-Type": "application/json"
  }
});
