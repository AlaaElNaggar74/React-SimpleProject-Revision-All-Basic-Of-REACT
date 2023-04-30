// Variable Of Type :

export let withdrawValue = "WITHDRAW";
export let depositeValue = "DEPOSITE";

// Action Creator

export let withdraw = (amount) => {
  let objWithdraw = {
    type: withdrawValue,
    payload: amount,
  };
  return objWithdraw;
};
export let deposite = (amount) => {
  let objdeposite = {
    type: depositeValue,
    payload: amount,
  };
  return objdeposite;
};
