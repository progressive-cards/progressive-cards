import React from 'react'
import 'commons/list.scss'

export default class BooKMarksCard extends React.Component {


  render(){
      return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >
               <div className="list-card mdl-card " >
                 <div className="mdl-card__title">
                   <h4>Book Marks</h4>
                 </div>
                    <ul className="deal-list mdl-list">
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar deal-list-item"></i>
                          <span>Bryan Cranston</span>
                          <span className="mdl-list__item-sub-title">62 Episodes</span>
                        </span>
                      </li>
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar  deal-list-item"></i>
                          <span>Aaron Paul</span>
                          <span className="mdl-list__item-sub-title">62 Episodes</span>
                        </span>
                      </li>
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar  deal-list-item"></i>
                          <span>Bob Odenkirk</span>
                          <span className="mdl-list__item-sub-title">62 Episodes</span>
                        </span>
                      </li>
                    </ul>
                 </div>
              </div>
              );
    }


}
