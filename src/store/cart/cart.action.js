export const addToCart = (productData) => (dispatch, getState) => {
  const { cartState } = getState();
  const cartListData = [...cartState.cartList]
  if (isDuplicate(cartListData, productData._id) || productData.countInStock === 0) {
    return
  }
  productData.qty = 1
  cartListData.push(productData)
  addToLocalStorage(cartListData)
  dispatch({
    type: 'add-to-cart',
    payload: { loading: true, cartList: cartListData, error: "", totals: makeTotals(cartListData) },
  });
};

export const increaseQty = (id) => (dispatch, getState) => {
  const { cartState } = getState();
  const cartListData = [...cartState.cartList]
  cartListData.forEach(data => {
    if (data._id === id && data.qty < data.countInStock) {
     ++data.qty
    }
  })
  addToLocalStorage(cartListData)
  dispatch({
    type: 'increase',
    payload: { loading: true, cartList: cartListData, error: "", totals: makeTotals(cartListData) },
  });
};

export const decreaseQty = (id) => (dispatch, getState) => {
  const { cartState } = getState();
  const cartListData = [...cartState.cartList]
  cartListData.forEach(data => {
    if (data._id === id && data.qty > 1) {
     --data.qty
    }
  })
  addToLocalStorage(cartListData)
  dispatch({
    type: 'decrease',
    payload: { loading: true, cartList: cartListData, error: "", totals: makeTotals(cartListData) },
  });
};

export const deleteItem = (id) => (dispatch, getState) => {
  const { cartState } = getState();
  const cartListData = [...cartState.cartList]
  cartListData.forEach((data, index) => {
    if (data._id === id) {
      cartListData.splice(index, 1)
    }
  })
  addToLocalStorage(cartListData)
  dispatch({
    type: 'delete',
    payload: { loading: true, cartList: cartListData, error: "", totals: makeTotals(cartListData) },
  });
};

export const clearCart = () => (dispatch, getState) => {
  dispatch({
    type: 'decrease',
    payload: { loading: true, cartList: [], error: "", totals: makeTotals([]) },
  });
};

function isDuplicate(cartList, productId) {
  let productIsDuplicate = false
  cartList.forEach(cartProduct => {
    if (cartProduct._id === productId) {
      productIsDuplicate = true
    }
  })
  return productIsDuplicate
}

function addToLocalStorage(cartList) {
  localStorage.setItem('cart', JSON.stringify(cartList))
}

function makeTotals(cartList) {
  let total = {
    totalCount: 0,
    totalPrice: 0
  }
  cartList.forEach(data => {
    total.totalCount += data.qty
    total.totalPrice += (data.price * data.qty)
  })
  saveTotals(total)
  return total
}

function saveTotals(totals) {
  localStorage.setItem('totals', JSON.stringify(totals))
}

// class compnent > PascalCase

// function variable naming argument > camelCase >>>>> js camelCase

// css class anything in css > kebab-case   .my-class 

// MY_CONST 
