export const counterActions = (dispatch) => {
  const Inc = () => dispatch({ type: "inc", myValue: 100 });

  return { Inc };
};
