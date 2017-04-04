import React from 'react'
import 'commons/list.scss'
import familyLifeImage from './family_life.jpg'

export default class BooKMarksCard extends React.Component {


  render(){
      return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >
               <div className="list-card mdl-card " >
                 <div className="mdl-card__title">
                   <h4>Shortcuts</h4>
                 </div>
                    <ul className="deal-list mdl-list">
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar deal-list-item" style={{
                            backgroundImage:  'url(' + familyLifeImage + ')'
                          }} > </i>
                          <span>5 Reasons to choose family life</span>
                          <span className="mdl-list__item-sub-title">Family moments together</span>
                        </span>
                      </li>
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar  deal-list-item" style={{
                             backgroundImage: 'url(' + familyLifeImage + ')'
                           }} > </i>
                          <span>5 Reasons to choose family life</span>
                          <span className="mdl-list__item-sub-title">Family moments together</span>
                        </span>
                      </li>
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar  deal-list-item" style={{
                             backgroundImage: 'url(' + familyLifeImage + ')'
                           }} > </i>
                          <span>5 Reasons to choose family life</span>
                          <span className="mdl-list__item-sub-title">Family moments together</span>
                        </span>
                      </li>
                      <li className="mdl-list__item mdl-list__item--two-line">
                        <span className="mdl-list__item-primary-content">
                          <i className="mdl-list__item-avatar  deal-list-item" style={{
                             backgroundImage: 'url(' + familyLifeImage + ')'
                           }} > </i>
                          <span>5 Reasons to choose family life</span>
                          <span className="mdl-list__item-sub-title">Family moments together</span>
                        </span>
                      </li>
                    </ul>
                 </div>
              </div>
              );
    }


}
