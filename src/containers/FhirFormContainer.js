import React from 'react'
import PropTypes from 'prop-types'
import {FhirForm} from 'components'
import {createSelector, createStructuredSelector} from 'reselect'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as FhirFormActions from '../actions/fhirformAction'
import JsonForm from "../components/JsonForm";

class FhirFormContainer extends React.Component {
  static propTypes = {
    loadForm: PropTypes.func.isRequired,
    fhirform: PropTypes.shape({
      resources: PropTypes.array,
      fetching: PropTypes.bool,
      fetched: PropTypes.bool,
      error: PropTypes.object,
      singleResource: PropTypes.object,
    }),
  };

  static defaultProps = {
    fhirform: {
      resources: [],
      fetching: false,
      fetched: false,
      error: null,
      singleResource: null,
    }
  };


  componentDidMount = () => {
    this.props.loadForm('http://hapi.fhir.org/baseDstu3/', 'Questionnaire', 'sickKids', '3')

  };


  componentWillReceiveProps = () => {


  };

  schema = {
    title: "",
    type: "object",
    required: [],
    properties: {
    }
  };

  render() {

    if (this.props.fhirform.fetched) {
      const items = this.props.fhirform.singleResource.item;
      console.log(items);
      items.forEach((item) => {
        const buff = item;
        buff.title = item.text;
        if (item.type === 'text')
          buff.type = 'string';
        if (item.type === 'open-choice')
          buff.type = 'string';
        this.schema.properties[item.linkId] = buff
      })
    }

    return (

      <div><FhirForm
        form={this.props.fhirform}
      />
        <JsonForm
          form={this.props.fhirform}
          schema={this.schema}
        />
      </div>

    )
  }
}

const mapStateToProps = createStructuredSelector({
  fhirform: createSelector(
    (state) => state.fhirform,
    (counterState) => counterState // Implement filters if required
    // https://github.com/reactjs/reselect#motivation-for-memoized-selectors
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FhirFormActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FhirFormContainer)
