import { connect } from 'react-redux'
import EngagementView from './EngagementView'
import Actions from './actions/actions.js'
import React from 'react'

const mapStateToProps = (state,ownProps) => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return { };
}

const EngagementViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EngagementView)

export default EngagementViewContainer
