function deals(state = {},action){
  let newState = Object.assign({},state,{
      sate: action.state,
      data: action.data
  });
  return newState;
};

export default deals;