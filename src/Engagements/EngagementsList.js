import React from 'react'
import Engagement from './Engagement.js'
import { Link } from 'react-router-dom'

export default class EngagementsList extends React.Component {
  render(){
    return (
	  <div className="mdl-grid">{ this.props.list ? this.props.list.map(  ( engagement , index ) => {
	     return <Engagement title={ engagement.title } image={ engagement.image } key={ index } />; } )
	      : <Link to="/helo" >Empty list</Link> }
	  </div>
	);
  }
}
