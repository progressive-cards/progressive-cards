import LatestDeals from 'API/LatestDeals'

function deals(state,data) {
  return { type: 'latestDeals', state: state, data: data || null };
}


function loadLatestDeals(dispatch) {
  dispatch(deals('LOADING'));
  LatestDeals.get()
  .then( data => { return dispatch(deals('LOADED',data)) } )
  .catch( error => {
     console.dir(error);
    return dispatch(deals('ERROR'))
  });
}

export default { loadLatestDeals: loadLatestDeals };
