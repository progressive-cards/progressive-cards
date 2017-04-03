import { connect } from 'react-redux'
import LatestDealsView from './LatestDealsView'
import Actions from 'Engagements/actions/LatestDealsActions'
import React from 'react'

const mapStateToProps = (state,ownProps) => {
  let deals = state.latestDeals || {};
  return {
    deals: deals.data || []
  };
}

const mapDispatchToProps = (dispatch) => {
  dispatch(Actions.loadLatestDeals);
  return { };
}

const LatestDealsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestDealsView)

export default LatestDealsViewContainer
