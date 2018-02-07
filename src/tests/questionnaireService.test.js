import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import questionnaireService from "../services/questionnaireService";

describe('FHIR API', () => {
  it('returns data when api is called', done => {
    const mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet('http://hapi.fhir.org/baseDstu3/Questionnaire/sickKids/_history/3?_format=json').reply(200, data);

    questionnaireService.getQuestionnaire().then(response => {
      expect(typeof (response)).toBe('object')
      done();
    });
  });
});
