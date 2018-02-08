import React from 'react'
import Form from "react-jsonschema-form";
import pure from "recompose/pure";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const log = (type) => console.log.bind(console, type);

function JsonForm() {
  return (
    <Form schema={schema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")}/>
  )
}

export default pure(JsonForm)
