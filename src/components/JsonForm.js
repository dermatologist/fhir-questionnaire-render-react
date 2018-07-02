import React from 'react'
import Form from "react-jsonschema-form";
import pure from "recompose/pure";
import PropTypes from "prop-types";


const log = (type) => console.log.bind(console, type);

function JsonForm({schema, form}) {
  if (form.singleResource == null) {
    return null;
  } else if (form.fetching) {
    return <div>Loading...</div>;
  } else if (form.length === 0) {
    return <div>None</div>;
  }

  return (
    <Form schema={schema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")}/>
  )
}

JsonForm.propTypes = {
  form: PropTypes.shape({
    resources: PropTypes.array,
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    error: PropTypes.object,
    singleResource: PropTypes.object,
  }).isRequired,
  schema: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.array,
    properties: PropTypes.object,
  }).isRequired,
};

export default pure(JsonForm)
