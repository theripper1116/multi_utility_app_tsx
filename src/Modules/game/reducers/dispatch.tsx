const initialState: object = {
  playerNumber: 1,
  numberToAdd: 0,
};
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "changeNum":
      return state;
    case "changePlayer":
      return state;
    default:
      return state;
  }
};

export default changeTheNumber;
