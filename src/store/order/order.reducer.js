export const OrderReducer = (
  orderState = {
    loading: false,
    ordersList: [],
    orderDetail: null,
    error: ""
  },
  { type, payload }
) => {
  switch (type) {
    case 'store-data':
      return payload;
    default:
      return orderState;
  }
};
