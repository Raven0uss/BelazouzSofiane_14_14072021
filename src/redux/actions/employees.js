export const addEmployee = (employee) => {
  return {
    type: "ADD_EMPLOYEE",
    employee,
  };
};
