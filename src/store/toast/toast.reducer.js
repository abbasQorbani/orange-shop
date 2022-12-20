export const ToastReducer = (
  toastState = {
    toastList: [],
  },
  { type, payload }
) => {
  switch (type) {
    case 'store-toast':
      return payload;
    default:
      return toastState;
  }
};
