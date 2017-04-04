import React from 'react'
import 'commons/list.scss'

export default class SearchCard extends React.Component {

  render(){
      return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >
               <div className="list-card mdl-card " >
                 <div className="mdl-card__title">
                   <h4>Recent Searches</h4>
                 </div>
                    <ul className="deal-list mdl-list">
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar deal-list-item"></i>
                          <span>Spain</span>
                          <span className="mdl-list__item-sub-title">6th April</span>
                        </span>
                      </li>
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar  deal-list-item"></i>
                          <span>Heathrow to France</span>
                          <span className="mdl-list__item-sub-title">10 April</span>
                        </span>
                      </li>
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar  deal-list-item"></i>
                          <span>New York</span>
                          <span className="mdl-list__item-sub-title">May 20</span>
                        </span>
                      </li>
                    </ul>
                 </div>
              </div>
              );
    }

}
