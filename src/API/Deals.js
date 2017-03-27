import HTTP from './HTTP.js'

const Deals = {
  get: function(){
    return HTTP.get('//localhost:3000/rover');
  }
}

export default Deals;
