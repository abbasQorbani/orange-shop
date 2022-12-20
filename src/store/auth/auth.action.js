import axios from "axios";

export const login = (loginPayload) => async (dispatch, getState) => {
  const { userData } = getState().authState
  dispatch({
    type: 'update-user-state',
    payload: { loading: true, userData: userData, error: "", signedUp: false, profileInfo: {} },
  });
  await axios.post('http://kzico.runflare.run/user/login', {
    email: loginPayload.email,
    password: loginPayload.password
  })
  .then((response) => {
    addToLocalStorage(response.data.user)
    dispatch({
      type: 'update-user-state',
      payload: { loading: false, userData: response.data.user, error: "", signedUp: false, profileInfo: {} },
    });
  })
  .catch(() => {
    dispatch({
      type: 'update-user-state',
      payload: { loading: false, userData: userData, error: "failed", signedUp: false, profileInfo: {} },
    });
  })
};

export const signUp = (signUpPayload) => async (dispatch, getState) => {
  const { userData } = getState().authState
  dispatch({
    type: 'update-user-state',
    payload: { loading: true, userData: userData, error: "", signedUp: false, profileInfo: {} },
  });
  await axios.post('http://kzico.runflare.run/user/signup', {
    username: signUpPayload.username,
    email: signUpPayload.email,
    password: signUpPayload.password,
    mobile: signUpPayload.mobile
  })
  .then(() => {
    dispatch({
      type: 'update-user-state',
      payload: { loading: false, userData: userData, error: "", signedUp: true, profileInfo: {} },
    });
  })
  .catch(() => {
    dispatch({
      type: 'update-user-state',
      payload: { loading: false, userData: userData, error: "", signedUp: false, profileInfo: {} },
    });
  })
};

export function storeAddress(address) {
  return async (dispatch, getState) => {
    const { userData } = getState().authState;
    saveUserAddress(address);
    dispatch({
      type: 'update-user-state',
      payload: { loading: false, userData: userData, error: "", signedUp: false, userAddress: address, profileInfo: {} },
    });
  };
}

export const getProfile = () => async (dispatch, getState) => {
  const { userData } = getState().authState
  dispatch({
    type: 'update-user-state',
    payload: { loading: true, userData: userData, error: "", signedUp: false, profileInfo: {} },
  });
  await axios.get('http://kzico.runflare.run/user/profile', {
    headers: {
      authorization: "Bearer " + userData.token
    }
  })
  .then((respnse) => {
    dispatch({
      type: 'update-user-state',
      payload: { loading: false, userData: userData, error: "", signedUp: true, profileInfo: respnse.data },
    });
  })
  .catch(() => {
    dispatch({
      type: 'update-user-state',
      payload: { loading: false, userData: userData, error: "", signedUp: false, profileInfo: {} },
    });
  })
};

export const logOut = () => async (dispatch, getState) => {
  dispatch({
    type: 'update-user-state',
    payload: { loading: false, userData: null, error: "", signedUp: false, userAddress: null, profileInfo: {} },
  });
  deleteUserLocalStorage()
};

function addToLocalStorage(userData) {
  localStorage.setItem('user', JSON.stringify(userData))
}

function saveUserAddress(address) {
  localStorage.setItem('address', JSON.stringify(address))
}

function deleteUserLocalStorage() {
  localStorage.removeItem('user')
  localStorage.removeItem('address')
}
