import React from 'react'
import EngagementsList from './EngagementsList.js'
import image from './london-bridge-oasis.jpg'

export default class Engagements extends React.Component {
  render(){
    return (
	  <div> { this.props.children } <EngagementsList list={ this.props.engagements } /></div>
	);
  }
}
