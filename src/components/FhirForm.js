import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'

const Intro = styled.p`font-size: large;`;

function FhirForm({form}) {
  return (
    <section>
      <Intro>
        To get started, edit <code>src/routes/index.js </code>
        and save to reload.
      </Intro>
      <p>
        {form.fetched}
      </p>
    </section>
  )
}

FhirForm.propTypes = {
  form: PropTypes.shape({
    resources: PropTypes.array,
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    error: PropTypes.object,
    singleResource: PropTypes.object,
  }).isRequired,
};

export default pure(FhirForm)
