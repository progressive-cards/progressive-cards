import { connect } from 'react-redux'
import SearchCard from './SearchCard'
import React from 'react'

 const mapStateToProps = (state,ownProps) => {

   return {

   };
 }

 const mapDispatchToProps = (dispatch) => {

   return { };
 }

 const SearchCardContainer = connect(
   mapStateToProps,
   mapDispatchToProps
 )(SearchCard)

 export default SearchCardContainer
