import React from 'react'
import PropTypes from 'prop-types'
import {FhirForm} from 'components'
import {createSelector, createStructuredSelector} from 'reselect'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as FhirFormActions from 'actions/fhirform'

class FhirFormContainer extends React.Component {
  static propTypes = {
    loadForm: PropTypes.func.isRequired,
    fhirform: PropTypes.shape({}),
  };

  static defaultProps = {
    fhirform: {}
  };

  loadForm = () => {
    this.props.loadForm()
  };

  render() {
    return (
      <FhirForm
        form={this.props.fhirform}
      />
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
