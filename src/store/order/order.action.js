import axios from "axios";

export const getOrders = () => async (dispatch, getState) => {
  let fetchedOrders = []
  dispatch({
    type: 'store-data',
    payload: { loading: true, ordersList: fetchedOrders, orderDetail: null, error: "" },
  });
  await axios.get('http://kzico.runflare.run/order', {
    headers: {
      authorization: "Bearer " + getUserToken(),
    },
  })
  .then((response) => {
    fetchedOrders = response.data
    dispatch({
      type: 'store-data',
      payload: { loading: false, ordersList: fetchedOrders, orderDetail: null, error: "" },
    });
  })
};

export const getOrderDetail = (id) => async (dispatch, getState) => {
  let fetchedOrderDetail = {}
  dispatch({
    type: 'store-data',
    payload: { loading: true, ordersList: [], orderDetail: null, error: "" },
  });
  await axios.get('http://kzico.runflare.run/order/' + id, {
    headers: {
      authorization: "Bearer " + getUserToken(),
    },
  })
  .then((response) => {
    fetchedOrderDetail = response.data
    dispatch({
      type: 'store-data',
      payload: { loading: false, ordersList: [], orderDetail: fetchedOrderDetail, error: "" },
    });
  })
};

function getUserToken() {
  let user = JSON.parse(localStorage.getItem('user'))
  return user.token
}
