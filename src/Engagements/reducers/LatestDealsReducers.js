function deals(state = {},action){
  let newState = Object.assign({},state,{
      sate: action.state,
      data: action.data
  });
  return action.type === 'latestDeals' ? newState : state;
};

export default deals;
