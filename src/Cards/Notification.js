import React from 'react'
import Ripple from 'react-ink'

export default class Notification extends React.Component {

  render(){
    return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >

             <div className="mdl-card engagement-card " >
               <Ripple></Ripple>
               <div className="mdl-card__title">
                 <div>
                   <span className="mdl-typography--subhead" > Notification </span>
                   <h3>{ this.props.title }</h3>
                 </div>
                 <div className="image" ><img src={ this.props.image } alt="London" /></div>
               </div>
               <p className="mdl-card__supporting-text" >
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nulla malesuada faucibus mauris, quis finibus metus mollis vitae.
               </p>
               </div>
            </div>
            );
  }

}
