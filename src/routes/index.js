import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components'
import {CounterContainer, FhirFormContainer} from '../containers'
import {Header} from '../components'

const Container = styled.div`text-align: center;`;

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" component={FhirFormContainer}/>
        <Route path="/counter" component={CounterContainer}/>
      </Container>
    </Router>
  )
}

export default Routes
