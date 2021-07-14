const initialState = [];

const employees = (state = initialState, action) => {
  const { employee } = action;

  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, employee];
    default:
      return state;
  }
};

export default employees;
