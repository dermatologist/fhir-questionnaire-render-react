# Notes

## How is the form rendered

The form is rendered using the extension [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form)
The form is rendered by the JsonForm.js component.
The conversion of the FHIR Questionnaire to a JSONSchema happens in FhirFormContainer
The actual conversion is done by the npm module called fhirformjs.
This encapsulates the conversion code from the presentation layer.
fhirformjs is under construction.
