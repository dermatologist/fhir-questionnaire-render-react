import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'

const Intro = styled.p`font-size: large;`;

function FhirForm({form}) {
  if (form.singleResource == null) {
    return null;
  } else if (form.fetching) {
    return <div>Loading...</div>;
  } else if (form.length === 0) {
    return <div>None</div>;
  }

  return (
    <section>
      <Intro>
        {form.singleResource.name}<br/>
        {form.singleResource.publisher}
      </Intro>
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
