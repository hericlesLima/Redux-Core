export const depositMoney = (amount) => {
  console.log(amount)
  return (dispatch) => {
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  console.log(amount)
  return (dispatch) => {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  };
};
