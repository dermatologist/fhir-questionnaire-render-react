import App from './App';
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Edit FHIR Questionnaire below (Change IDs if you duplicate an element)</h2>
  expect(wrapper.contains(welcome)).toEqual(true);
});
