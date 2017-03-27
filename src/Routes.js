import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router as BrowserRouter, Route } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import EngagementsContainer from './Engagements/EngagementsContainer.js'
import EngagementViewContainer from './Engagements/EngagementViewContainer.js'
import AppReducers from './Reducers.js'
import thunk from 'redux-thunk'

var browserHistory = createBrowserHistory();

debugger;
// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    deals: AppReducers
  }),
  applyMiddleware(thunk)
);

store.subscribe(console.dir);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const AppRoutes = () => { return (
    <Router history={browserHistory}>
      <EngagementsContainer>
         <Route path="/hello" component={ EngagementViewContainer } />
      </EngagementsContainer>
    </Router>
    ) };


export default AppRoutes;


