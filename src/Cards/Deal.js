import React from 'react'
import Ripple from 'commons/Ripple'
import { Link } from 'react-router'

export default class Deal extends React.Component {
  render(){
    return (
          <div className="mdl-cell mdl-cell--12-phone" draggable="true" >
          <div className="deal-card mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title" style={{
                backgroundImage: 'url(' + this.props.image + ' )'
              }} >
              <div className="mdl-card__title-text " >
                <h4 className="mdl-color--cyan-300" >{ this.props.title }</h4>
               </div>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--subhead"> From </span> <span className="price mdl-color-text--amber-A700" > £450 </span>
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <Link className="mdl-button mdl-color--amber-A700 price mdl-color-text--black" to="/deal/4444" >
                   Book Now
                   <Ripple></Ripple>
                </Link>
              </div>
              </div>
           </div>);
  }
}
