export const pushToastList = (toastData) => (dispatch, getState) => {
  let toastList = [...getState().toastState.toastList]
  if (toastList.length >= 4) {
    toastList.shift()
  }
  toastList.push(toastData)
  dispatch({
    type: 'store-toast',
    payload: { toastList },
  });
};
export const romoveSingleToast = (index) => (dispatch, getState) => {
  const toastList = [...getState().toastState.toastList]
  toastList.splice(index, 1)
  dispatch({
    type: 'store-toast',
    payload: { toastList },
  });
};
export const romoveToastFromLast = () => (dispatch, getState) => {
  const toastList = [...getState().toastState.toastList]
  if (toastList.length > 0) {
    toastList.shift()
  }
  dispatch({
    type: 'store-toast',
    payload: { toastList },
  });
};