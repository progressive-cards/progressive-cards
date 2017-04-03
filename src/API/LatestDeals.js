import HTTP from './HTTP.js'

const LatestDeals = {
  get: function(){
    return HTTP.get('//quiet-thicket-57017.herokuapp.com/latest-deals');
  }
}

export default LatestDeals;
