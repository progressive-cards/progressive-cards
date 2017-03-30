import React from 'react'
import { Link } from 'react-router'
import arrowImage from 'assets/ic_arrow_back_black_36dp.png';

export default class NotificationView extends React.Component {

  render(){
    return (
      <div className="mdl-card" style={{
        position: 'fixed',
        left: 0,
        top: '56px',
        width: '100%',
        height: document.documentElement.clientHeight - 56 + 'px'
      }}>
        <div className="mdl-card__title">
           <Link to="/" ><img src={ arrowImage } /></Link>
        </div>

        <div className="mdl-card__supporting-text">
        <h3> Delay of 2 hours </h3>
        Sitting at a boarding gate, watching a storm roll in, waiting to take off in a plane that hasn’t yet
        arrived from its previous destination, knowing that the airline’s promise of a
        ’15 min delay’ is only taunting you, can make one feel pretty helpless.
        in the Southern Hemisphere.
        </div>
        <div className="mdl-card__actions">
           <a href="#">Wikipedia entry</a>
        </div>
      </div>
    );
  }
}
