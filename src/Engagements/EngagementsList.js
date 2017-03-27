import React from 'react'
import Engagement from './Engagement.js'

export default class EngagementsList extends React.Component {
  render(){
    return (
	  <div className="mdl-grid">{ this.props.list ? this.props.list.map(  ( engagement , index ) => {
	     return <Engagement title={ engagement.title } image={ engagement.image } key={ index } />; } )
	      : <Link to="/hello" >Empty list</Link> }
	  </div>
	);
  }
}
