import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

function GetUrl({getUrlSubmit, getUrlChange}) {
  return (
    <section>
      <form onSubmit={getUrlSubmit}>
        Questionnaire URL:
        <input type="text" onChange={getUrlChange}/>
        <input type="submit" value="Submit"/>
      </form>
    </section>
  )
}

GetUrl.propTypes = {
  getUrlSubmit: PropTypes.func.isRequired,
  getUrlChange: PropTypes.func.isRequired,
};

export default pure(GetUrl)
