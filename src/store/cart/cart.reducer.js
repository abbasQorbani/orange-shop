export const CartReducer = (
  cartState = {
    loading: false,
    cartList: cartListInitState(),
    error: "",
    totals: totalsInitState()
  },
  { type, payload }
) => {
  switch (type) {
    case 'add-to-cart':
      return payload;
    case 'increase':
      return payload;
    case 'decrease':
      return payload;
    case 'delete':
      return payload;
    default:
      return cartState;
  }
};

function cartListInitState() {
  let initState = []
  let storedData = localStorage.getItem('cart')
  if (storedData) {
    initState = JSON.parse(storedData)
  }
  return initState
}

function totalsInitState() {
  let initState = {
    totalCount: 0,
    totalPrice: 0
  }
  let storedTotal = localStorage.getItem('totals')
  if (storedTotal) {
    initState = JSON.parse(storedTotal)
  }
  return initState
}
