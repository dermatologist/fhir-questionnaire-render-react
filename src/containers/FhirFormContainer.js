import React from "react";
import PropTypes from "prop-types";
import { createSelector, createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fhirformjs from "fhirformjs";
import { JsonForms } from "@jsonforms/react";

import * as FhirFormActions from "../actions/fhirformAction";
import { FhirForm } from "../components";
import GetUrl from "../components/GetUrl";

class FhirFormContainer extends React.Component {
  static propTypes = {
    // loadForm: PropTypes.func.isRequired,
    renderForm: PropTypes.func.isRequired,
    loadFormFromUrl: PropTypes.func.isRequired,
    handleSubmitAction: PropTypes.func.isRequired,
    fhirform: PropTypes.shape({
      resources: PropTypes.array,
      fetching: PropTypes.bool,
      fetched: PropTypes.bool,
      error: PropTypes.object,
      singleResource: PropTypes.object,
      schema: PropTypes.object,
      ui: PropTypes.object,
    }),
    formdata: PropTypes.shape({
      data: PropTypes.object
    }),

  };

  static defaultProps = {
    fhirform: {
      resources: [],
      fetching: false,
      fetched: false,
      error: null,
      singleResource: null,
      schema: {},
      data: {},
      ui: null
    },
    formdata: {
      data: {}
    },
  };


  componentDidMount = () => {
    // this.props.loadForm('http://hapi.fhir.org/baseDstu3/', 'Questionnaire', 'sickKids', '3')
  };


  componentWillReceiveProps = () => {


  };

  geturlchange = (event) => {
    console.log(event.target.value);
    // this.props.geturltext = event.target.value;
    this.setState({value: event.target.value});
  };

  geturlsubmit = (event) => {
    // alert('A name was submitted: ' + this.state.value);
    // this.props.loadFormFromUrl(this.props.geturltext)
    this.props.loadFormFromUrl(this.state.value);
    event.preventDefault();
  };

  handleSubmit = (event) => {
    this.props.fhirform.singleResource.resourceType = "QuestionnaireResponse";
    const qresponse = this.props.fhirform.singleResource;
    this.props.handleSubmitAction(qresponse);
    event.preventDefault();
  };



  render() {

    if (this.props.fhirform.fetched) {
      // This is where the fhirformjs npm module is loaded
      const jsonform = fhirformjs.fhirformjs(this.props.fhirform.singleResource);
      // items.forEach((item) => {
      //   this.schema.properties[item.linkId] = item;
      // })
      this.props.fhirform.schema = jsonform.schema;
      this.props.fhirform.ui = jsonform.ui;
      this.props.formdata.data = jsonform.data;
      this.props.renderForm(this.props.formdata.data, this.props.fhirform.schema, this.props.fhirform.ui);
    }

    return (

      <div>

        <GetUrl
          getUrlSubmit={this.geturlsubmit}
          getUrlChange={this.geturlchange}

        />
        <FhirForm
        form={this.props.fhirform}
        />


        <JsonForms/>

        <button
          className="btn btn-default"
          onClick={this.handleSubmit}>Submit Form
        </button>

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
