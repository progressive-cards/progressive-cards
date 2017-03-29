import React from 'react'

export default class Notification extends React.Component {

  render(){
    return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >
             <div className="mdl-card notification-card ">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">title Text Goes Here</h2>
              </div>
              <div className="mdl-card__supporting-text">
                This text might describe the photo and provide further information, such as where and
                when it was taken.
              </div>
            </div>
            </div>
            );
  }

}
